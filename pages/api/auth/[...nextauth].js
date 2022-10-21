import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"
import { setCookie } from 'nookies';
import spotifyApi, { LOGIN_URL } from "../../../lib/spotify.js"

async function refreshAccessToken(token) {
  try {

    spotifyApi.setAccessToken(token.accessToken);
    spotifyApi.setRefreshToken(token.refreshToken);

    const { body: refreshedToken } = await spotifyApi.refreshAccessToken();
    console.log("REFRESHED TOKEN IS", refreshedToken)

    return {
      ...token,
      accessToken: refreshedToken.access_token,
      accessTokenExpires: Date.now + refreshedToken.expires_in * 1000, // = 1 hour as 3600 returns from spotify API
      refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
      // replace if new one came back else fall back to old refresh token
    }

  } catch (error) {
    console.log(error)

    return {
      ...token,
      error: "RefreshAccessTokenError"
    }
  }
}

const nextAuthOptions = (req, res) => ({
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization: LOGIN_URL
    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/login' // TODO Change this?
  },
  callbacks: {
    async jwt({ token, account, user }) {

      console.log('jwt() callback called', token, account, user);

      // initial sign in
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          username: account.providerAccountId,
          accessTokenExpires: account.expires_at * 1000,

        }
      }

      setCookie({ res }, 'accessToken', token.accessToken, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
        httpOnly: false
      });

      // Return previous token if the access token has not expired yet
      if (Date.now() < token.accessTokenExpires) {
        console.log("EXISTING ACCESS TOKEN IS VALID")
        return token
      }

      // Access token has expired, so we need to refresh it...
      console.log("ACCESS TOKEN HAS EXPIRED... REFRESHING")

      const tokenData = await refreshAccessToken(token);

      setCookie({ res }, 'accessToken', tokenData.accessToken, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
        httpOnly: false
      });

      return tokenData;
    },

    async session({ session, token }) {

      console.log('SESSION', session);

      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.username = token.username;

      return session;
    }
  }
});

export default (req, res) => {
  return NextAuth(req, res, nextAuthOptions(req, res))
}
import Link from 'next/link';
import Sidebar from "../components/Sidebar"
import MyApp from "./_app.js"
import { getProviders, signIn } from "next-auth/react"


export default function Home({ providers }) {

  return (
    <main>
      <h1>Cory&apos;s Awesome Spotify Playlist App</h1>
        <p>Description of this app ... description of this app ... description of this app ... description of this app ... description of this app ... description of this app ... description of this app ... description of this app ... description of this app ... description of this app ...</p>

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            onClick={() => signIn(provider.id, { callbackUrl: "/thread"})}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </main>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers
    }
  }
}
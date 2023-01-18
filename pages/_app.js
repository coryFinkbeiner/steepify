// import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"

// import { ChakraProvider } from '@chakra-ui/react'
// import { extendTheme } from '@chakra-ui/react'

// const colors = {
//   brand: {
//     900: '#248474',
//     800: '#248474',
//     700: '#248474',
//   },
// }

// theme={theme}


// const theme = extendTheme({ colors })

function MyApp({ Component, pageProps : { session, ...pageProps } }) {

  return (
    <SessionProvider session={session}>
        <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp

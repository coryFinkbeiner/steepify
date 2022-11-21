// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

import Link from 'next/link';
import Sidebar from "../components/Sidebar"
import MyApp from "./_app.js"
import { getProviders, signIn } from "next-auth/react"

import Test from "./Test.js"



export default function Home({ providers }) {




  return (
    <div className="">
      <Test></Test>
    </div>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()

  console.log("OUT", providers)

  return {
    props: {
      providers
    }
  }
}


{/* <main>
<h1>Cory&apos;s Awesome Spotify Playlist App</h1>
<p>Description of this app ... description of this app ... description of this app ... description of this app ... description of this app ... description of this app ... description of this app ... description of this app ... description of this app ... description of this app ...</p>

{Object.values(providers).map((provider) => (
  <div key={provider.name}>
    <button
      onClick={() => signIn(provider.id, { callbackUrl: "/App"})}
    >
      Login with {provider.name}
    </button>
  </div>
))}

</main> */}
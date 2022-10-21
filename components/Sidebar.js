// import {
//   HomeIcon,
//   SearchIcon,
//   LibraryIcon,
//   PlusCircleIcon
// } from "@heroicons/react/outline";

import { signOut, useSession } from 'next-auth/react'

function Sidebar() {
  const { data: session, status } = useSession()

  console.log({session})

  return (
    <div>
      <div>
        <button onClick={() => signOut()}>
          Home
        </button>
        <button>
          Search
        </button>
        <button>
          Your Library
        </button>
      </div>
    </div>
  )
}

export default Sidebar
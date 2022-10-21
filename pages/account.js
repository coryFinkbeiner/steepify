
import { useArtists } from '../hooks'

import Link from 'next/link'

function Account() {

  const { artists } = useArtists();

  return (
    <div>
        <Link href="/">
          <a>About Us</a>
        </Link>
    </div>
  )
}

export default Account;
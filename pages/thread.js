import Link from 'next/link'
import useSWR from 'swr';
import useCookies from '/Users/coryfinkbeiner/steeperkeeper/steepify_next1/hooks/cookies.js'
import Search from './search'

const fetcher = async () => {
  const { getCookie } = useCookies();
  const url = 'https://api.spotify.com/v1/search?q=damn&type=album';
  const accessToken = getCookie('accessToken');
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    }
  })
  const data = response.json()
  return data
}

const Thread = () => {
  const { data, error } = useSWR(`/search?q=damn`, fetcher)
  if(error) return console.log(error)
  if(!data) return 'NO DATA'

  return (
    <div>
      <Search searchAlbums={data.albums}/>
    </div>
  )
}

export default Thread;




// const Search = () => {

//   const { data: results } = useSWR('/api/user', fetcher)

// }


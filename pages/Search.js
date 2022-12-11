import Link from 'next/link'
import { Input, Button, ButtonGroup, Stack, HStack, Box } from '@chakra-ui/react'
import useCookies from '/Users/coryfinkbeiner/steeperkeeper/steepify_next1/hooks/cookies.js'
import BankAlbum from './bankAlbum'
import {useState, useEffect} from 'react'


function Search({ bank, setBank }) {
  const { getCookie } = useCookies();
  const accessToken = getCookie('accessToken')

  const [input, setInput] = useState('')
  const [currentSearch, setCurrentSearch] = useState('')

  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://api.spotify.com/v1/search?q='+currentSearch+'&type=album', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [currentSearch])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  const handleInputChange = (e) => setInput(e.target.value)
  const handleSearchClick = (e) => {
    e.preventDefault()
    setCurrentSearch(input)
  }

  return (
    <Box margin={"10px"}>
      <div>
        <form onSubmit={handleSearchClick}>
          <HStack>
            <Button colorScheme='blue' type="submit">Search</Button>
            <Input placeholder='Search Albums' size='lg' value={input} onChange={handleInputChange}/>
          </HStack>
        </form>
        <br></br>
      </div>
    </Box>
  )
}


  // const searchResults = albums => {
  //   return albums.map( album => {
  //     console.log({album})
  //     return (
  //       <div>{album}</div>
  //     )
  //   })
  // }




export default Search;




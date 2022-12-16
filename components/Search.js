import Link from 'next/link'
import { Input, Button, ButtonGroup, Stack, HStack, Box, Flex, Wrap, WrapItem, Center } from '@chakra-ui/react'
import useCookies from '/Users/coryfinkbeiner/steeperkeeper/steepify_next1/hooks/cookies.js'
import SearchAlbum from './SearchAlbum'
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
    fetch(currentSearch ? 'https://api.spotify.com/v1/search?q='+currentSearch+'&type=album' : null, {
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



  const handleInputChange = (e) => setInput(e.target.value)
  const handleSearchClick = (e) => {
    e.preventDefault()
    setCurrentSearch(input)
  }

  return (
    <Box
      h='88vh'
      w='90%'
      bg='purple'
      margin='10px'
    >

    <Box
      margin={"10px"}
    >
      <div>
        <form onSubmit={handleSearchClick}>
          <HStack>
            <Button colorScheme='blue' type="submit">Search</Button>
            <Input placeholder='Search Albums' size='lg' value={input} onChange={handleInputChange}/>
          </HStack>
        </form>
        <br></br>
        <Flex
          bg='black'
          h='80vh'
          direction='wrap'


        >
          <Wrap>

                {data &&
                  data.albums.items.map((album, i) => {

                    if (i < 20) return (
                      <WrapItem>
                          <SearchAlbum bank={bank} setBank={setBank} key={i} album={album}/>
                      </WrapItem>

                    )
                  })
                }

          </Wrap>
        </Flex>
      </div>
    </Box>


    </Box>
  )

}


export default Search;




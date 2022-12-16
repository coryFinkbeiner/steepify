import Link from 'next/link'
import Album from './Album'
import { Input, Button, ButtonGroup, Stack, HStack, Box } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { useArtists, useSearch } from '../hooks'


function Search({ bank, setBank }) {

  const [input, setInput] = useState('')
  const [currentSearch, setCurrentSearch] = useState('')
  const {searchResults} = useSearch(currentSearch)

  const handleInputChange = (e) => setInput(e.target.value)

  const handleSearchClick = (e) => {
    e.preventDefault()
    setCurrentSearch(input)
  }



  return (


    <Box
       margin={"10px"}
       h='100%'
       w='48vh'
       bg='purple'
       margin='10px'
       align='center'
    >
      <div>
        <form onSubmit={handleSearchClick}>
          <HStack>
            <Button colorScheme='blue' type="submit">Search</Button>
            <Input placeholder='Search Albums' size='lg' value={input} onChange={handleInputChange}/>
          </HStack>
        </form>
        <br></br>
        <Box height={"90vh"} outline={"2px groove black"} >
          {searchResults &&
            <Stack>
              {searchResults.albums.items.map((item, i) => {
                if (i <= 11) {
                  return (
                    <Album key={i} bank={bank} setBank={setBank} data={item}></Album>
                  )
                }
              })}
            </Stack>
          }
        </Box>
      </div>

    </Box>
  )








  // return (
  //   <Box margin={"10px"}>
  //     <div>
  //       <form onSubmit={handleSearchClick}>
  //         <HStack>
  //           <Button colorScheme='blue' type="submit">Search</Button>
  //           <Input placeholder='Search Albums' size='lg' value={input} onChange={handleInputChange}/>
  //         </HStack>
  //       </form>
  //       <br></br>
  //       <Box height={"90vh"} outline={"2px groove black"} >
  //         {searchResults &&
  //           <Stack>
  //             {searchResults.albums.items.map((item, i) => {
  //               if (i <= 11) {
  //                 return (
  //                   <Album key={i} bank={bank} setBank={setBank} data={item}></Album>
  //                 )
  //               }
  //             })}
  //           </Stack>
  //         }
  //       </Box>
  //     </div>
  //   </Box>
  // )




}

export default Search;




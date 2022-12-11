import Link from 'next/link'
import { Input, Button, ButtonGroup, Stack, HStack, Box } from '@chakra-ui/react'
import useSWR from 'swr';
import useCookies from '/Users/coryfinkbeiner/steeperkeeper/steepify_next1/hooks/cookies.js'



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

const Search = () => {
  const { data, error } = useSWR(`/search?q=damn`, fetcher)
  if(error) return console.log(error)
  if(!data) return 'NO DATA'

  console.log({data})

  return (
    <div>
      Search
    </div>
  )
}


// const Search = ({ searchAlbums }) => {

//   console.log({searchAlbums})

//   return (
//     <div>
//       Search
//     </div>
//   )
// }

export default Search;



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

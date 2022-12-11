import Link from 'next/link'
import { Input, Button, ButtonGroup, Stack, HStack, Box } from '@chakra-ui/react'


const Search = ({ searchAlbums }) => {

  console.log({searchAlbums})

  return (
    <div>
      Search
    </div>
  )
}

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

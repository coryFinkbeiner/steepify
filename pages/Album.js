
import { Box, Image, HStack, Button } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { } from '../hooks'


function Album({ data, setBank, bank }) {

  return (
    <Box margin={'4px'} outline={"2px groove black"}>
      <HStack>
          <Image
            
            src={data.images[2].url}
            objectFit='cover'
          ></Image>
          <span>{data.name} by {data.artists[0].name}</span>
          <Button
            onClick={
              () => {
                if (bank.length <= 2) {
                  setBank([...bank, data])
                }
              }
            }
          >Add to Bank</Button>
      </HStack>
    </Box>
  )
}

export default Album;



// return (
//   <Box margin={'4px'} outline={"2px groove black"}>
//     <HStack>
//         <Image
//           src={data.images[2].url}
//           objectFit='cover'
//         ></Image>
//         <span>{data.name} by {data.artists[0].name}</span>
//         <Button
//           onClick={
//             () => {
//               if (bank.length <= 2) {
//                 setBank([...bank, data])
//               }
//             }
//           }
//         >Add to Bank</Button>

//     </HStack>
//   </Box>
// )

import BankAlbum from './BankAlbum'

import { Box, Stack, Button, VStack } from '@chakra-ui/react'

import { useState, useEffect } from 'react'

import { useGetAlbumTracks } from '../hooks'




function Bank({bank, setBank }) {

  const [playlist, setPlaylist] = useState([])

  const handleThread = e => {

    console.log('here')


    let albumIDs = []

    for (let i = 0; i < bank.length; i++) {
      albumIDs.push(bank[i].id)

    }

    var data = useGetAlbumTracks(albumIDs)

    setPlaylist(data)

    console.log('react data', playlist)

    e.preventDefault()
  }


  return (
    <Box margin={"10px"}>
      <VStack>
        <VStack>
          <Box height={"30vh"} width={"56vh"} outline={"2px solid black"}>

          </Box>
          <Button left={"200px"}> Create Playlist

          </Button>
        </VStack>
        <Box outline={"2px solid black"} height={"61vh"} width={"56vh"}>

        </Box>
      </VStack>
    </Box>
  )
}

export default Bank;



// return (
//   <Box margin={"10px"}>
//    <div>
//      {bank.length === 3 &&
//        <Button onClick={handleThread}>
//          Thread
//        </Button>
//      }
//    </div>
//      <div>
//        {bank &&
//            <Stack>
//              {bank.map((item, i) => {

//                return (
//                  <BankAlbum key={i} bank={bank} setBank={setBank} data={item}></BankAlbum>
//                )

//              })}
//            </Stack>
//          }
//      </div>

//   </Box>
//  )
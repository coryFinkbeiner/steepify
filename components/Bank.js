
import SearchAlbum from './SearchAlbum'

import { Box, Stack, Button, VStack, Image, Flex, Wrap, WrapItem } from '@chakra-ui/react'

import { useState, useEffect } from 'react'

// import { useGetAlbumTracks } from '../hooks'


function Bank({bank, setBank}) {





  return (
    <Box
      h='88vh'
      w='48vh'
      bg='purple'
      margin='10px'
      align='center'
    >
      <Flex
        direction='column'
        justify='space-around'
        align='center'
        margin='20px'
      >
        <Flex
          bg='black'
          h='80vh'
          direction='rows'
        >
          {bank &&
            bank.map((album, i) => {
              if (i < 20) return (
                    <SearchAlbum bank={bank} setBank={setBank} key={i} album={album}/>
              )
            })
          }
        </Flex>

        <Box
          bg='white'
          w='45vh'
          h='58vh'
          margin='5px'
        >
        </Box>


      </Flex>
    </Box>
  )

}

export default Bank;
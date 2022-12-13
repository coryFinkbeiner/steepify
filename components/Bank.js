
import BankAlbum from './BankAlbum'

import { Box, Stack, Button, VStack, Image, Flex } from '@chakra-ui/react'

import { useState, useEffect } from 'react'

// import { useGetAlbumTracks } from '../hooks'


function Bank() {

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
      <Box
        bg='green'
        w='45vh'
        h='27vh'
        margin='5px'
      >

      </Box>
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
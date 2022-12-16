
import BankAlbum from './BankAlbum'

import { Box, Stack, Button, VStack, Image, Flex, Wrap, WrapItem, HStack } from '@chakra-ui/react'

import { useState, useEffect } from 'react'

// import { useGetAlbumTracks } from '../hooks'


function Bank({bank, setBank}) {

  console.log('bank from Bank', bank)




  return (
    <Box
      padding='3px'
      margin='3px'
      h='95%'
      w='95%'
      bg='purple'
      margin='3px'
      align='center'
    >
      <Flex
        direction='column'
        h='97%'
        w='97%'
        margin='3px'
        padding='2px'
      >
        <Flex
          bg='black'
          h='97%'
          w='97%'
          direction='rows'
          z-index='1'
          margin='1px'
          padding='1px'

        >
          {bank &&
            bank.map((album, i) => {
              if (i < 3) return (
                    <BankAlbum bank={bank} setBank={setBank} album={album} key={i}/>
              )
            })
          }
        </Flex>
        <HStack
          margin='5px'
          padding='3px'
        >
          <Button>create playlist</Button>


          <Button
            onClick={()=> setBank([])}
          >
            clear bank
          </Button>

        </HStack>
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
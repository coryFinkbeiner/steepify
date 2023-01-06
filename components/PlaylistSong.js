import { Box, Image, HStack, Button, Card, CardHeader, CardBody, CardFooter, Text, VStack, Stack, ButtonGroup, Heading, Divider, Flex, Center } from '@chakra-ui/react'

import { useState } from 'react';


const PlaylistSong = ({song, key, i}) => {

  // console.log({song})



  return (
    <HStack
      bg='orange'
    >
      <Text>
        {i}
      </Text>
      <Image
        src={song.img}
      >
      </Image>
      <VStack>
        <Text
          fontSize='16px'
        >
          {song.name}
        </Text>
        <Text
          fontSize='12px'
        >
          {song.artists[0].name}
        </Text>
      </VStack>
      <Text
        fontSize='12px'

      >
        {song.album_title}
      </Text>
      <Text
        fontSize='12px'
      >
        {song.duration_ms + ' ms'}
      </Text>

    </HStack>
  )

}


export default PlaylistSong




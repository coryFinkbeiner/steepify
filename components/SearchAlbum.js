
import { Box, Image, HStack, Button, Card, CardHeader, CardBody, CardFooter, Text, VStack, Stack, ButtonGroup, Heading, Divider, Flex } from '@chakra-ui/react'
// import { useState, useEffect } from 'react'
// import { } from '../hooks'


function SearchAlbum({album}) {

  console.log('BA', album)



    return (
      <Flex
        bg='white'
        w='17vh'
        h='20vh'
        margin='2px'
        direction='column'
      >
        <Image
          src={album.images[2].url}
          alt='Dan Abramov'

        ></Image>
        <Box>
        <Text
          bg='black'
          color='white'
          fontSize='12px'
        >
          {album.name}
        </Text>
        <Text
          bg='black'
          color='white'
          fontSize='9px'
        >
          {album.artists[0].name}
        </Text>
        </Box>
      </Flex>

  )




  // return (
  //   <Flex
  //     bg='white'
  //     w='17vh'
  //     h='20vh'
  //     margin='2px'
  //     direction='column'
  //   >
  //     <Image
  //       src={album.images[2].url}
  //       alt='Dan Abramov'

  //     ></Image>
  //     <div>{album.name}</div>
  //     <div>{album.artists[0].name}</div>
  //   </Flex>

  // )

}

export default SearchAlbum;



import { Box, Image, HStack, Button, Card, CardHeader, CardBody, CardFooter, Text, VStack, Stack, ButtonGroup, Heading, Divider, Flex, Center } from '@chakra-ui/react'
// import { useState, useEffect } from 'react'
// import { } from '../hooks'
import React, { useState } from 'react';



const BankAlbum = ({album, bank, setBank, key})=> {





  return (
    <div


    >


      <Flex
        bg='white'
        w='17vh'
        h='20vh'
        margin='2px'
        direction='column'

      >

        <div>
        <Image
          w= '100%'
          src={album.images[2].url}


        ></Image>

        </div>


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
      </div>

  )
}


  export default BankAlbum
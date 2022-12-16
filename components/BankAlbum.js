
import { Box, Image, HStack, Button, Card, CardHeader, CardBody, CardFooter, Text, VStack, Stack, ButtonGroup, Heading, Divider, Flex, Center } from '@chakra-ui/react'
// import { useState, useEffect } from 'react'
// import { } from '../hooks'
import React, { useState } from 'react';



const BankAlbum = ({album, bank, setBank})=> {

  const [isShown, setIsShown] = useState(false);
  // console.log(isShown)

  const handleClick = (e) => {

    console.log(bank)

    var newBank = bank

    console.log(bank)


      // delete newBank[i]
      // newBank.filter(Object)
      // console.log(newBank)
      // setBank(newBank)


    for (let i = 0; i < newBank.length; i++) {
      if (newBank[i].name === album.name) {
        newBank = newBank.slice(i)
        setBank(newBank)
      }
    }

    // console.log(album.name)
    // console.log({newBank})
    // console.log({bank})




    e.preventDefault()
  }




  return (
    <button

      onClick={handleClick}

      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}



    >


      <Flex
        bg='white'
        w='17vh'
        h='20vh'
        margin='2px'
        direction='column'

      >

        <div>
        {isShown &&

          <div
            position='absolute'
            top='50%'
            left='50%'
            transform='translate(-50%, -50%)'
          >
            Remove from Bank
          </div>


        }
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
      </button>

  )
}


  export default BankAlbum
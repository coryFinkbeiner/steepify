
import { Box, Image, HStack, Button, Card, CardHeader, CardBody, CardFooter, Text, VStack, Stack, ButtonGroup, Heading, Divider, Flex, Center } from '@chakra-ui/react'
// import { useState, useEffect } from 'react'
// import { } from '../hooks'
import React, { useState } from 'react';



function SearchAlbum({album, bank, setBank}) {

  const [isShown, setIsShown] = useState(false);
  // console.log(isShown)

  const handleClick = (e) => {
    if (bank.length < 4) {
      setBank([...bank, album])
      // console.log(bank)
    }
    // else trigger modal


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
            Add to Bank
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







  // return (
  //   <button

  //     onClick={()=>console.log(album.name)}


  //     onMouseEnter={() => setIsShown(true)}
  //     onMouseLeave={() => setIsShown(false)}



  //   >


  //     <Flex
  //       bg='white'
  //       w='17vh'
  //       h='20vh'
  //       margin='2px'
  //       direction='column'

  //     >


  //       <Image

  //         src={album.images[2].url}
  //         alt='Dan Abramov'

  //       ></Image>


  //       <Box>
  //         <Text
  //           bg='black'
  //           color='white'
  //           fontSize='12px'
  //         >
  //           {album.name}
  //         </Text>
  //         <Text
  //           bg='black'
  //           color='white'
  //           fontSize='9px'
  //         >
  //           {album.artists[0].name}
  //         </Text>
  //       </Box>


  //       </Flex>
  //     </button>

  // )

}

export default SearchAlbum;


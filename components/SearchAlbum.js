
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
      <div>{album.name}</div>
      <div>{album.artists[0].name}</div>
    </Flex>

  )


  // return (
  //   <Box
  //     outline='black'

  //   >


  //     <VStack
  //       justify='center'
  //     >

  //         <Image
  //           src={album.images[2].url}
  //           alt='Dan Abramov'
  //           boxSize='80px'


  //           // src={data.images[2].url}
  //           // objectFit='cover'
  //         ></Image>
  //         <Text>
  //           oy
  //         </Text>

  //     </VStack>


  //   </Box>
  // )


  // return (
  //   <Box
  //     boxSize='100px'
  //     objectFit='cover'
  //     borderWidth='1px'
  //     borderRadius='lg'
  //     overflow='hidden'
  //     border='1px'
  //     borderColor='black'
  //     outline='black'
  //   >



  //   >
  //     <HStack>
  //       <Image
  //         src={album.images[1].url}
  //         alt='Dan Abramov'
  //       />
  //       <Text>
  //         album
  //       </Text>


  //     </HStack>
  //   </Box>
  // )

}

export default SearchAlbum;


// return (
//   <Card
//     direction={{ base: 'column', sm: 'row' }}
//     overflow='hidden'
//     variant='outline'
//   >
//     <Image
//       objectFit='cover'
//       maxW={{ base: '100%', sm: '200px' }}
//       src='https://tinyurl.com/4xmn468z'
//       alt='test'
//     />



//   </Card>
// )


{/* <Image
objectFit='cover'
maxW={{ base: '100%', sm: '200px' }}
src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
alt='Caffe Latte'
/> */}
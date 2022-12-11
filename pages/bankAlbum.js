
import { Box, Image, HStack, Button, Card, CardHeader, CardBody, CardFooter, Text } from '@chakra-ui/react'
// import { useState, useEffect } from 'react'
// import { } from '../hooks'


function BankAlbum({album}) {

  console.log('BA', album)


  return (
    <Box boxSize='sm'>
      <Image src={album.images[1].url} alt='Dan Abramov' />
    </Box>
  )

}

export default BankAlbum;


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
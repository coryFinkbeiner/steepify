
import Link from 'next/link'
import { Box, Image, HStack, Button } from '@chakra-ui/react'


import { useState, useEffect } from 'react'

import { } from '../hooks'




function Album({ data }) {

  console.log(data)

  const [highlight, setHighlight] = useState(null)


  return (
    <Box  width='100%'>
      <HStack>
          <Image
            src={data.images[2].url}
            objectFit='cover'
          ></Image>
          <span>{data.name} by {data.artists[0].name}</span>
          <Button>Add to Bank</Button>
      </HStack>
    </Box>
  )
}

export default Album;


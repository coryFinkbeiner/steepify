
import Link from 'next/link'
import { Box, Image } from '@chakra-ui/react'


import { useState, useEffect } from 'react'

import { } from '../hooks'




function Album({ data }) {

  console.log(data)


  return (
    <Box onClick={() => console.log('TEST')} color='gray' width='100%'>
        <Image
          src={data.images[2].url}
          objectFit='cover'
        ></Image>
        <span>{data.name} by</span>

    </Box>
  )
}

export default Album;


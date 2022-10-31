
import { Box, Image, HStack, Button } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { } from '../hooks'


function bankAlbum({ bank, setBank }) {

  const [highlight, setHighlight] = useState(null)

  return (
    <Box>
      <HStack>
          <Image
            src={data.images[2].url}
            objectFit='cover'
          ></Image>
          <span>{data.name} by {data.artists[0].name}</span>
          <Button>Remove from Bank</Button>
      </HStack>
    </Box>
  )
}

export default bankAlbum;


import Link from 'next/link'
// import useSWR from 'swr';
import useCookies from '/Users/coryfinkbeiner/steeperkeeper/steepify_next1/hooks/cookies.js'
import Search from '../Components/Search'
import Bank from '../Components/Bank'

import { Box, Image, HStack, Button, Flex, Spacer, Text, Center } from '@chakra-ui/react'

const Thread = () => {

  return (
    <Box>
      <Flex
        direction='row'
        justify='space-around'
        align='center'
        margin='6px'
      >
        <Box
          padding='3px'
          align='right'
          w='65%'
          h='100%'
          bg='grey'
          borderColor='black'
        >
          <Search />
        </Box>
        <Box
          w='35%'
          h='90%'
          bg='red.500'
        >
          <Bank/>
        </Box>
      </Flex>
    </Box>

  )
}

export default Thread;


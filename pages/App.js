
import Link from 'next/link'
import Bank from './Bank'
import Search from './Search'

import { SimpleGrid, Box } from '@chakra-ui/react'

import { useState, useEffect } from 'react'

import {  } from '../hooks'




function App() {

  const [bank, setBank] = useState([])

  return (
    <SimpleGrid columns={2} spacing={15}>
      <Box height='80px'>
        <Search setBank={setBank} bank={bank}></Search>
      </Box>
      <Box height='80px'>
        <Bank setBank={setBank} bank={bank}></Bank>
      </Box>
    </SimpleGrid>
  )
}

export default App;


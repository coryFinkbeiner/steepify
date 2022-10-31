
import Link from 'next/link'
import Bank from './Bank'
import Search from './Search'

import { HStack } from '@chakra-ui/react'

import { useState, useEffect } from 'react'

import {  } from '../hooks'




function App() {

  const [bank, setBank] = useState([])

  return (
   <HStack>
    <Search setBank={setBank} bank={bank}></Search>
    <Bank setBank={setBank} bank={bank}></Bank>
   </HStack>
  )
}

export default App;


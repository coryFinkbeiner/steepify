import Bank from './Bank.js'

import { SimpleGrid, Box } from '@chakra-ui/react'


function Test() {

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

export default Test;


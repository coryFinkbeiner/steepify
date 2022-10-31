
import bankAlbum from './bankAlbum'

import { Box, Stack } from '@chakra-ui/react'

import { useState, useEffect } from 'react'

import {  } from '../hooks'




function Bank({bank, setBank }) {

  return (
   <Box>
     <div>
      {bank &&
          <Stack>
            {bank.map((item, i) => {

              return (
                <bankAlbum bank={bank} setBank={setBank} data={item}></bankAlbum>
              )

            })}
          </Stack>
        }
     </div>
   </Box>
  )
}

export default Bank;



import BankAlbum from './BankAlbum'

import { Box, Stack, Button } from '@chakra-ui/react'

import { useState, useEffect } from 'react'

import {  } from '../hooks'




function Bank({bank, setBank }) {

  const [playlist, setPlaylist] = useState([])

  const handleThread = e => {

    

    e.preventDefault()
  }


  return (
   <Box>
    <div>
      {bank.length === 3 &&
        <Button onClick={handleThread}>
          Thread
        </Button>
      }
    </div>
      <div>
        {bank &&
            <Stack>
              {bank.map((item, i) => {

                return (
                  <BankAlbum key={i} bank={bank} setBank={setBank} data={item}></BankAlbum>
                )

              })}
            </Stack>
          }
      </div>

   </Box>
  )
}

export default Bank;


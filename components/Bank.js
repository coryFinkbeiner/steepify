
import BankAlbum from './BankAlbum'

import useCookies from '/Users/coryfinkbeiner/steeperkeeper/steepify_next1/hooks/cookies.js'

import { Box, Stack, Button, VStack, Image, Flex, Wrap, WrapItem, HStack } from '@chakra-ui/react'

import { useState, useEffect } from 'react'


function Bank({bank, setBank}) {
  const { getCookie } = useCookies();
  const accessToken = getCookie('accessToken')


  const [playlist, setPlaylist] = useState([])

  const [album1, setAlbum1] = useState([])
  const [album2, setAlbum2] = useState([])
  const [album3, setAlbum3] = useState([])


  const fetchPlaylistSongs = () => {

    fetch('https://api.spotify.com/v1/albums/' + bank[0].id + '/tracks', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setAlbum1(data.items)
      })


    fetch('https://api.spotify.com/v1/albums/' + bank[1].id + '/tracks', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setAlbum2(data.items)
        // console.log(album2)

      })


    fetch('https://api.spotify.com/v1/albums/' + bank[2].id + '/tracks', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setAlbum3(data.items)
      })


    var a1 = album1
    var a2 = album2
    var a3 = album3

    var array = [a1, a2, a3]

    var newPlaylist = []
    var count = 0

    while (count < 3) {
      for (let i = 0; i< array.length; i++) {
        if (!array[i].length) {
          array.splice(i, 1)
          count++
          i--
        } else {
          newPlaylist.push(array[i].shift())
        }

      }
    }

    console.log(newPlaylist)

    // setPlaylist(newPlaylist)

    setPlaylist(newPlaylist)

  }






  const handleCreatePlaylist = (e) => {

    fetchPlaylistSongs()
    e.preventDefault()

  }




  return (
    <Box
      padding='3px'
      margin='3px'
      h='95%'
      w='95%'
      bg='purple'
      margin='3px'
      align='center'
    >
      <Flex
        direction='column'
        h='97%'
        w='97%'
        margin='3px'
        padding='2px'
      >
        <Flex
          bg='black'
          h='97%'
          w='97%'
          direction='rows'
          z-index='1'
          margin='1px'
          padding='1px'

        >
          {bank &&
            bank.map((album, i) => {
              if (i < 3) return (
                    <BankAlbum bank={bank} setBank={setBank} album={album} key={i}/>
              )
            })
          }
        </Flex>
        <HStack
          margin='5px'
          padding='3px'
        >
          <Button
            onClick={handleCreatePlaylist}
          >
            create playlist
          </Button>


          <Button
            onClick={()=> setBank([])}
          >
            clear bank
          </Button>

        </HStack>
        <Box
          bg='white'
          w='45vh'
          h='58vh'
          margin='5px'
        >
        {playlist && <div>{playlist.length}</div>}
        </Box>
      </Flex>
    </Box>
  )

}

export default Bank;
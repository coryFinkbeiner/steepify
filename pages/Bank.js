
import BankAlbum from './BankAlbum'

import { Box, Stack, Button } from '@chakra-ui/react'

import { useState, useEffect } from 'react'

import { useGetAlbumTracks } from '../hooks'




function Bank({bank, setBank }) {

  const [playlist, setPlaylist] = useState([])

  // console.log(useGetAlbumTracks(["5XpEKORZ4y6OrCZSKsi46A", "2guirTSEqLizK7j9i1MTTZ"]))


  const handleThread = e => {

    let albumIDs = []

    for (let i = 0; i < bank.length; i++) {

      console.log(bank[i])
      albumIDs.push(bank[i].id)

    }

    console.log(useGetAlbumTracks(albumIDs))

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






// import useCookies from './cookies';

// // const fetcher = (...params) => fetch(...params).then(response => response.json());

// const useGetAlbumTracks = (bank) => {
//   console.log('inside bank', bank)
//   const { getCookie } = useCookies();
//   const accessToken = getCookie('accessToken');

//   let playlist = []


//   for (let i = 0; i < bank.length; i++) {

//     console.log(bank[i].id)

//     fetch(`https://api.spotify.com/v1/albums/${bank[i].id}/tracks`, {
//       method: 'GET',
//       // mode: 'no-cors',
//       headers: {
//         Authorization: `Bearer ${accessToken}`
//       },
//     })
//     .then(res => console.log(res))


//     .then((response) => response.body.json())
//     // .then((data) => {
//     //   console.log({data})
//     //   // playlist.push(data.items)
//     //   // console.log({playlist})
//     // })
//     .catch(err => console.log(err))

//   }




//   // const {
//   //   data: albumTracks
//   // } = useSWR(albumID ? `/albums/${albumID}/tracks` : null, async () => {
//   //     const url = `https://api.spotify.com/v1/albums/${albumID}/tracks`;
//   //     const accessToken = getCookie('accessToken');

//   //     return await fetcher(url, {
//   //       method: 'GET',
//   //       headers: {
//   //         Authorization: `Bearer ${accessToken}`
//   //       }
//   //     });
//   //   },{revalidateOnFocus: false});
//   //   console.log('inside hook', albumTracks)
//   // return {albumTracks}

// }

// export default useGetAlbumTracks;



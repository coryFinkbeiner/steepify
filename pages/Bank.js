
import BankAlbum from './BankAlbum'

import { Box, Stack, Button } from '@chakra-ui/react'

import { useState, useEffect } from 'react'

import { useGetAlbumTracks } from '../hooks'




function Bank({bank, setBank }) {

  const [playlist, setPlaylist] = useState([])

  const handleThread = e => {

    console.log('here')


    let albumIDs = []

    for (let i = 0; i < bank.length; i++) {
      albumIDs.push(bank[i].id)

    }

    var data = useGetAlbumTracks(albumIDs)

    setPlaylist(data)

    console.log('react data', playlist)

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









// import BankAlbum from './BankAlbum'

// import { Box, Stack, Button } from '@chakra-ui/react'

// import { useState, useEffect } from 'react'

// import { useGetAlbumTracks } from '../hooks'




// function Bank({bank, setBank }) {

//   const [playlist, setPlaylist] = useState([])

//   // console.log(useGetAlbumTracks(["5XpEKORZ4y6OrCZSKsi46A", "2guirTSEqLizK7j9i1MTTZ"]))


//   const handleThread = e => {

//     console.log('here')


//     let albumIDs = []

//     for (let i = 0; i < bank.length; i++) {
//       albumIDs.push(bank[i].id)

//     }

//     var data = useGetAlbumTracks(albumIDs)

//     setPlaylist(data)

//     console.log('react data', playlist)


//   //  console.log('ass', useGetAlbumTracks(albumIDs))

//     // console.log('X', x)

//     e.preventDefault()
//   }


//   return (
//    <Box>
//     <div>
//       {bank.length === 3 &&
//         <Button onClick={handleThread}>
//           Thread
//         </Button>
//       }
//     </div>
//       <div>
//         {bank &&
//             <Stack>
//               {bank.map((item, i) => {

//                 return (
//                   <BankAlbum key={i} bank={bank} setBank={setBank} data={item}></BankAlbum>
//                 )

//               })}
//             </Stack>
//           }
//       </div>

//    </Box>
//   )
// }

// export default Bank;



import Link from 'next/link'
import Album from './Album'

import { Input, Button, ButtonGroup, Stack } from '@chakra-ui/react'

import { useState, useEffect } from 'react'

import { useArtists, useSearch } from '../hooks'




function Search() {

  // console.log("well?", useArtists('TEST2'))

  const [input, setInput] = useState('')

  const [currentSearch, setCurrentSearch] = useState('')

  const {searchResults} = useSearch(currentSearch)

  // const [result, setResult] = useState(useArtists(input))

  const handleInputChange = (e) => setInput(e.target.value)

  const handleSearchClick = (e) => {
    e.preventDefault()
    setCurrentSearch(input)

  }
  //console.log(JSON.stringify(searchResults.items[0]))

  return (
    <div>
      <form onSubmit={handleSearchClick}>
        <div>
          <Input placeholder='Search albums and songs' size='lg' value={input} onChange={handleInputChange}/>
          <Button colorScheme='blue' type="submit">Button</Button>
        </div>
      </form>
      {searchResults &&
        <Stack>
          {searchResults.albums.items.map((item, i) => {
            if (i <= 7) {
              return (
                <Album data={item}></Album>
              )
            }
          })}
        </Stack>
      }
    </div>

  )
}

export default Search;





//         {searchResults.albums.items.map}1





// import Link from 'next/link'
// import { Input, Button, ButtonGroup, Stack } from '@chakra-ui/react'


// import { useState, useEffect } from 'react'

// import { useArtists, useSearch } from '../hooks'




// function Search() {

//   // console.log("well?", useArtists('TEST2'))

//   const [input, setInput] = useState('')

//   const [currentSearch, setCurrentSearch] = useState('')

//   const {searchResults} = useSearch(currentSearch)

//   // const [result, setResult] = useState(useArtists(input))

//   const handleInputChange = (e) => setInput(e.target.value)

//   const handleSearchClick = (e) => {
//     e.preventDefault()
//     setCurrentSearch(input)

//   }
//   console.log(JSON.stringify(searchResults, null, 2))

//   return (
//     <form onSubmit={handleSearchClick}>
//       <div>
//         <Input placeholder='Search albums and songs' size='lg' value={input} onChange={handleInputChange}/>
//         <Button colorScheme='blue' type="submit">Button</Button>
//       </div>


//       <pre>
//         {JSON.stringify(searchResults.albums.items[0])}
//       </pre>
//     </form>

//   )
// }

// export default Search;

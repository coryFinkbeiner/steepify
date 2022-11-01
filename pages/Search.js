

import Link from 'next/link'
import Album from './Album'

import { Input, Button, ButtonGroup, Stack } from '@chakra-ui/react'

import { useState, useEffect } from 'react'

import { useArtists, useSearch } from '../hooks'




function Search({ bank, setBank }) {

  const [input, setInput] = useState('')
  const [currentSearch, setCurrentSearch] = useState('')
  const {searchResults} = useSearch(currentSearch)

  const handleInputChange = (e) => setInput(e.target.value)

  const handleSearchClick = (e) => {

    e.preventDefault()
    setCurrentSearch(input)
  }

  return (
    <div>
      <form onSubmit={handleSearchClick}>
        <div>
          <Input placeholder='Search albums only' size='lg' value={input} onChange={handleInputChange}/>
          <Button colorScheme='blue' type="submit">Search</Button>
        </div>
      </form>
      <br></br>
      <div>
        {searchResults &&
          <Stack>
            {searchResults.albums.items.map((item, i) => {
              if (i <= 7) {
                return (
                  <Album key={i} bank={bank} setBank={setBank} data={item}></Album>
                )
              }
            })}
          </Stack>
        }
      </div>
    </div>

  )
}

export default Search;


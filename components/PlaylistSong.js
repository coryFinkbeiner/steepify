import { Box, Image, HStack, Button, Card, CardHeader, CardBody, CardFooter, Text, VStack, Stack, ButtonGroup, Heading, Divider, Flex, Center } from '@chakra-ui/react'

import { useState } from 'react';


const PlaylistSong = ({song}) => {


  console.log({song})


  return (
    <div>{song.name}</div>
  )

}


export default PlaylistSong




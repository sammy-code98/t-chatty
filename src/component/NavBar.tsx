import React from 'react'
import { Box, Heading, Image, IconButton } from "@chakra-ui/react"
import btnImage from "../../public/btn.png"
import { MoonIcon } from '@chakra-ui/icons'

export default function NavBar() {
    return (
        <Box
            display='flex'
            h='2rem'
            py='2rem'
            px='4rem'
            bg='white'
            shadow='md'
            alignItems='center'
            w='100vw'
            justifyContent='space-between'


        >
            <Box>
                <Heading size='lg' color='gray.500'>T~Chatty</Heading>
            </Box>
            <Box display='flex'>
                <Image src={btnImage} alt='sign up btn' />
                <IconButton variant='ghost' mx='2rem' aria-label='Search database' icon={<MoonIcon />} />
            </Box>
        </Box>
    )
}

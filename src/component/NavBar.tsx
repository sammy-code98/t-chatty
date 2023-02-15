import React from 'react'
import { Box, Heading, Image, IconButton, useMediaQuery } from "@chakra-ui/react"
import btnImage from "/btn.png"
import { MoonIcon } from '@chakra-ui/icons'
import { auth } from "../services/firebase"


export default function NavBar() {
    const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')

    return (
        <Box
            display='flex'
            h='2rem'
            py='2rem'
            px={{ base: '1rem', md: '4rem' }}
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
                {isLargerThan1280 ? <Image src={btnImage} alt='sign up btn' /> : ''
                }
                <IconButton variant='ghost' mx='2rem' aria-label='Search database' icon={<MoonIcon />} />
            </Box>
        </Box>
    )
}

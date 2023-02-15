import React from 'react'
import { Box, Heading, Image, IconButton, useMediaQuery, Button } from "@chakra-ui/react"
import btnImage from "/btn.png"
import { MoonIcon } from '@chakra-ui/icons'
import { auth } from "../services/firebase"
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";


export default function NavBar() {
    const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')

    const [user] = useAuthState(auth)

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider()
        signInWithRedirect(auth, provider)
    }

    const signOut = () => {
        auth.signOut()
    }

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
            {
                user ? (
                    <Button variant='outline' bgColor='blue.300' onClick={signOut}>Sign Out</Button>
                ) : (
                        <Box display='flex'>
                            {isLargerThan1280 ? <Image src={btnImage} alt='sign up btn' cursor='pointer' onClick={googleSignIn} /> : ''
                            }
                            <IconButton variant='ghost' mx='2rem' aria-label='Search database' icon={<MoonIcon />} />
                        </Box>
                )
            }

        </Box>
    )
}

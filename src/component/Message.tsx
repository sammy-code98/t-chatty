import React from 'react'
import { Box, Avatar, Text } from '@chakra-ui/react'
import { auth } from "../services/firebase"
import { useAuthState } from "react-firebase-hooks/auth";


export default function Message({ message }: { message: any }): JSX.Element {
    const [user] = useAuthState(auth)


    return (
        <Box mt='2rem' px={{ base: '1rem', md: '4rem' }}>
            <Box
                display='flex'
                alignItems='flex-start'
                p={{ base: '0.5rem', md: '2rem' }}
                bg='whiteSmoke'
                color='gray.700'
                shadow='md'
                width={{ base: '70%', md: '50%' }}
                borderRadius={`${message.uid === user?.uid ? '20px 20px 0 20px' : '20px 20px 20px 0'}`}
                float={`${message.uid === user?.uid ? 'right' : 'left'}`}
            >
                <Avatar name='Dan Abrahmov' src={message.avatar} />
                <Box ml='1.5rem'>
                    <Text color='gray.700' fontWeight='bold'>{message.name}</Text>
                    <Text color='gray.700' wordBreak='break-all'>{message.text}</Text>
                </Box>
            </Box>

        </Box>
    )
}

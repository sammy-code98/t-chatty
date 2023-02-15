import React from 'react'
import { Box, Avatar, Text } from '@chakra-ui/react'
import { auth } from "../services/firebase"
import { useAuthState } from "react-firebase-hooks/auth";


export default function Message({ message }: { message: any }): JSX.Element {
    const [user] = useAuthState(auth)
    return (
        <Box mt='4rem' px='4rem'>
            <Box
                display='flex'
                alignItems='flex-start'
                p='2rem'
                bg='whiteSmoke'
                color='gray.700'
                shadow='md'
                borderRadius='md'
                width='50%'
                float={`${message.uid === user?.uid ? 'right' : 'left'}`}
            >
                <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                <Box ml='1.5rem'>
                    <Text color='gray.700' fontWeight='bold'>Msg name</Text>
                    <Text color='gray.700' wordBreak='break-all'>msg text </Text>
                </Box>
            </Box>

        </Box>
    )
}

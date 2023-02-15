import React from 'react'
import { Box, Avatar, Text } from '@chakra-ui/react'
export default function Message() {
    return (
        <Box>
            <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />

            <Box>
                <Text>Msg name</Text>
                <Text>msg text </Text>
            </Box>
        </Box>
    )
}

import React from 'react'
import { Box } from '@chakra-ui/react'
import Message from './Message';
export default function ChatBox() {
    return (
        <Box>
            <Box>
                <Message message={''} />
            </Box>
            <Box>
                {/* send message btn */}
            </Box>
        </Box>
    )
}

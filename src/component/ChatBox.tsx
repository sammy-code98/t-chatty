import React, { useRef } from 'react'
import { Box } from '@chakra-ui/react'
import Message from './Message';
import SendMessage from './SendMessage';


export default function ChatBox() {
    const scroll = useRef()

    return (
        <Box display='flex' flexDirection='column'>
            <Box>
                <Message message={''} />
            </Box>
            {/* <span ref={scroll}></span> */}
            <Box>
                <SendMessage scroll={scroll} />
            </Box>
        </Box>
    )
}

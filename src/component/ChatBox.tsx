import React, { useRef, useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'
import Message from './Message';
import SendMessage from './SendMessage';
import { query, collection, orderBy, onSnapshot, limit } from 'firebase/firestore';
import { db } from "../services/firebase"


export default function ChatBox() {
    const scroll = useRef<HTMLInputElement>(null)
    const [messages, setMessages] = useState(Array<any>)

    useEffect(() => {
        const q = query(
            collection(db, "messages"),
            orderBy("createdAt"),
            limit(50)
        )

        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            let messages: {}[] = []
            QuerySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id })
            })
            setMessages(messages)

        })
        return unsubscribe

    }, [])

    return (
        <Box display='flex' flexDirection='column' w='100vw' py='3rem'>
            <Box p='0.5rem' mb='3rem' display='flex' flexDirection='column'>
                {messages?.map((message) => (
                    <Message key={message.id} message={message} />

                ))}
            </Box>
            <span ref={scroll}></span>
            <Box>
                <SendMessage scroll={scroll} />
            </Box>
        </Box>
    )
}

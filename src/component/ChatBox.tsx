import React, { useRef, useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'
import Message from './Message';
import SendMessage from './SendMessage';
import { query, collection, orderBy, onSnapshot, limit, QuerySnapshot } from 'firebase/firestore';
import { db } from "../services/firebase"


export default function ChatBox() {
    const scroll = useRef()
    const [messages, setMessages] = useState(Array<any>)

    useEffect(() => {
        const q = query(
            collection(db, "messages"),
            orderBy("createdAt"),
            limit(50)
        )

        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            let messages = []
            QuerySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id })
            })
            setMessages(messages)
        })
        return () => unsubscribe;
    }, [])

    return (
        <Box display='flex' flexDirection='column'>
            <Box p='0.5rem' mb='3rem' display='flex' flexDirection='column'>
                {messages?.map((message) => (
                    <Message key={message.id} message={message} />

                ))}
            </Box>
            <Box>
                <SendMessage scroll={scroll} />
            </Box>
        </Box>
    )
}

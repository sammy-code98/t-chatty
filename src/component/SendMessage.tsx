import React, { useState } from 'react'
import { auth, db } from "../services/firebase"
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { Box, Button, FormControl, Input } from '@chakra-ui/react';


export default function SendMessage({ scroll }: any) {
    const [message, setMessage] = useState("")


    const sendMessage = async (event: any) => {
        event.preventDefault()
        if (message.trim() === "") {
            alert("Enter Valid message")
            return;
        }
        const { uid, displayName, photoURL }: any = auth.currentUser
        await addDoc(collection(db, "messages"), {
            text: message,
            name: displayName,
            avatar: photoURL,
            createdAt: serverTimestamp(),
            uid,
        })
        setMessage("")
        scroll.current.scrollIntoView({ behaviour: 'smooth' })
    }
    return (
        <Box>
            <Box
                as='form'
                onSubmit={sendMessage}
                display='flex'
                justifyContent='space-between'
                px={{ base: '0.5rem', md: '2rem' }}
                pos='fixed'
                bottom='0px'
                w='100%'
                alignItems='center'
                gap='2'
                overflowX='hidden'
                bg='white'

            >
                <FormControl>
                    <Input variant='outline' type='text' placeholder='type message...' value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </FormControl>

                <Button type="submit" variant='outline' bgColor='blue.300'>Send</Button>
            </Box>

        </Box>
    )
}

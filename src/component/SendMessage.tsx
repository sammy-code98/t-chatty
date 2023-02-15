import React from 'react'
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
export default function SendMessage({ scroll }: any) {
    return (
        <Box >
            <Box
                as='form'
                display='flex'
                justifyContent='space-between'
                px='2rem'
                pb='1rem'
                pos='fixed'
                bottom='0px'
                w='100%'
                alignItems='center' gap='2'>
            <FormControl>
                    <FormLabel hidden> Enter Message</FormLabel>
                    <Input variant='outline' type='text' placeholder='type message...' />
                </FormControl>

                <Button type="submit" variant='outline' bgColor='blue.300'>Send</Button>
            </Box>

        </Box>
    )
}

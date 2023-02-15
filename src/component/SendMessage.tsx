import React from 'react'
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
export default function SendMessage() {
    return (
        <Box>
            <FormControl>
                <FormLabel> Enter Message</FormLabel>
                <Input placeholder='First name' />
                <Button type="submit">Send</Button>
            </FormControl>
        </Box>
    )
}

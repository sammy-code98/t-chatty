import { useState } from 'react'
import { Box } from "@chakra-ui/react"
function App() {
  const [count, setCount] = useState(0)

  return (
    <Box display='flex' p={4} justifyItems='center' alignItems='center'>

      <Box>hello world</Box>
    </Box>
  )
}

export default App

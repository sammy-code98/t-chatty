import { Box, Heading, Text, Image } from "@chakra-ui/react"
import { NavBar, ChatBox } from "./component"
import btnImage from "/btn.png"


const Home = () => {
  return (
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' py='4rem'>
      <Heading>Hey Chatty</Heading>
      <Text mt='2rem' fontWeight={700}>Sign in with your google account to continue to enjoy chatty</Text>
      <Box mt='3rem'>
        <Image src={btnImage} alt='btn image' />

      </Box>
    </Box>
  )
}
function App() {
  return (
    <Box>
      <NavBar />
      <Home />

      <ChatBox />
    </Box>
  )
}

export default App










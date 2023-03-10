import { Box, Heading, Text, Image } from "@chakra-ui/react"
import { NavBar, ChatBox } from "./component"
import btnImage from "/btn.png"
import { auth } from "./services/firebase"
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth"
import { useAuthState } from 'react-firebase-hooks/auth';


const Home = () => {

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
  }

  return (
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' py='8rem'>
      <Heading>Hey Chatty</Heading>
      <Text mt='2rem' fontWeight={700}>Sign in with your google account to continue to enjoy chatty</Text>
      <Box mt='3rem'>
        <Image src={btnImage} alt='btn image' cursor='pointer' onClick={googleSignIn} />
      </Box>
    </Box>

  )
}
function App() {
  const [user] = useAuthState(auth)
  return (
    <Box>
      <NavBar />
      {!user ? (
      <Home />

      ) : (
        <>
          <ChatBox />
        </>
      )}

    </Box>
  )
}

export default App










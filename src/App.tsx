import { Box, Heading, Text, Image } from "@chakra-ui/react"
import { NavBar } from "./component"
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

    </Box>
  )
}

export default App









// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAm2Mk8xfbK-WooUlWoO3quYkgaUPBFGGI",
//   authDomain: "t-chatty.firebaseapp.com",
//   projectId: "t-chatty",
//   storageBucket: "t-chatty.appspot.com",
//   messagingSenderId: "626296960845",
//   appId: "1:626296960845:web:1d2a05b0cfd9174aff6904",
//   measurementId: "G-WSYPSL5MLC"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
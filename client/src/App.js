import './global.css'
import { Container } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
import Headline from './Headline';

function App() { 
  return (
    <Container maxW='120ch' centerContent
    w={{ 
      sm: '30em', // 480px
      md: '48em', // 768px
      lg: '62em', // 992px
      xl: '80em', // 1280px
      '2xl': '96em', // 1536px
     }}>
      <Navbar />
      <Headline />
    </Container>
  )
}

export default App;
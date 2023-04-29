import './global.css'
import { Container  } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
import General from './components/General';
import { Route, Routes } from "react-router-dom";
import World from './components/World';

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
      <Routes>
        <Route path='/' element={<General />} />
        <Route path='/world' element={<World />} />
      </Routes>
    </Container>
  )
}

export default App;
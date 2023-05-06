import './global.css'
import { Button, Container, Flex, useColorMode, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import Navbar from "./components/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import General from './components/General';
import Science from './components/Science';
import Tech from './components/Tech';
import Sports from './components/Sports';
import Business from './components/Business';
import Entertainment from './components/Entertainment';
import Health from './components/Health';
import SearchResult from './components/SearchResult';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

function App() {
  const {colorMode, toggleColorMode} = useColorMode();
  const [isMobile] = useMediaQuery("(max-width: 768px)")

  return (
    <Container maxW='120ch' centerContent
    w={{ 
      sm: '30em', // 480px
      md: '48em', // 768px
      lg: '62em', // 992px
      xl: '80em', // 1280px
      '2xl': '96em', // 1536px
     }}>
      { (isMobile) ? 
      <></>  :
      <Button onClick={() => toggleColorMode()}
      pos="absolute" top="0" right="0" m="1rem">
        {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      </Button> 
      }
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/general" />} />
        <Route path="/general" element={<General />} />
        <Route path='/science' element={<Science />} />
        <Route path='/technology' element={<Tech />} />
        <Route path='/sports' element={<Sports />} />
        <Route path='/business' element={<Business />} />
        <Route path='/entertainment' element={<Entertainment />} />
        <Route path='/health' element={<Health />} />
        <Route path='/search-results' element={<SearchResult />} />
        <Route path="*" element={
        <Flex justify='center'>
          <h2>404 沒有此頁面</h2>
          <h2>404 Page not found</h2>
        </Flex>} />
      </Routes>
      
    </Container>
  )
}

export default App;
import './global.css'
import { Helmet } from "react-helmet";
import { Container } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import General from './components/General';
import Science from './components/Science';
import Tech from './components/Tech';
import Sports from './components/Sports';
import Business from './components/Business';
import Entertainment from './components/Entertainment';
import Health from './components/Health';

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
      {/* <Helmet>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
      </Helmet> */}
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
        <Route path="*" element={<div><h2>404 Page not found</h2></div>} />
      </Routes>
      
    </Container>
  )
}

export default App;
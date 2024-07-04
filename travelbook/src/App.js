import React, { useEffect, useState } from "react";
import './App.css';
import Signup from "./Pages/Signup";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return(
  <ChakraProvider>
    <div className= "namefield">
      <Signup/>
    </div>
  </ChakraProvider>
  )
}

export default App;
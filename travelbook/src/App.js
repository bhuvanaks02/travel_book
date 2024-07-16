import React, { useEffect, useState } from "react";
import './App.css';
import Signup from "./Pages/Signup";
import { ChakraProvider } from '@chakra-ui/react'
const email = document.getElementById('email').value;
const submit = document.getElementById('submit');
submit.addEventListener("click", clickMe)


function clickMe(){
    this.preventDefault()
    alert("Done!!")
}
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
// import logo from './logo.svg';

import Calculator from './Components/Calculator';
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login';
import Singup from './Components/Singup';
import About from './Components/About';
import Navbar from './Components/Navbar'
import { useState } from 'react';

function App() {
  const [mode,setMode]=useState("light")
  const [bc,setBC]=useState('white')
  const [tc,setTC]=useState('black')
  function onChange()
  {
      if(mode=='light'){
     setMode('dark')
     setBC('black')
     setTC('white')
     document.body.style.backgroundColor='black'
      }
      else{
        setMode('light')
     setBC('white')
     setTC('black')
     document.body.style.backgroundColor='white'
      }
  }
  
  return (
     <  > 
      <Navbar onChange={onChange} mode={mode}/>
      <Routes>
      <Route exact path="/" element={<About backgroundColor={bc} color={tc}/>} />
        <Route exact path="/login" element={<Login color={tc}/>} />
        
        <Route exact path="/signup" element={<Singup color={tc}/>} />
        <Route exact path="/calculator" element={<Calculator backgroundColor={bc} color={tc}/>} />
      </Routes>
    </>
  );
}

export default App;

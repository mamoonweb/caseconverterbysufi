import React, {useEffect, useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  useEffect(() => {
    const getMode = localStorage.getItem('mode');
    let eleClass = document.getElementById("checking");
  
    if(getMode=== 'dark'){
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      eleClass.classList.add("text-light");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      eleClass.classList.add("text-dark");
    }
   
  }, [])
  
    const [mode, setMode] = useState('light');

    const toggleMode = ()=>{
      if(mode=== 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#343a40';
        toast("Dark Mode Enabled")
        localStorage.setItem('mode', 'dark');
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        toast("Light Mode Enabled")
        localStorage.setItem('mode', 'light');
      }
    };

    return ( 
      <>
        <BrowserRouter>
          <Navbar title = "Case Convertor" about = "About"  mode={mode} toggleMode={toggleMode} />
          <div className="container my-5">
            <Routes>
              <Route exact path="/about" element={<About />} />
              <Route exact path="/" element={<TextForm heading = "Enter the text to analyze" mode={mode} />} />
            </Routes>
          </div>
        </BrowserRouter>
      </>

    );
}

export default App;
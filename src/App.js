//class-->className    for-->htmlFor
import './App1.css';
import React, { useState } from 'react'
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);  //alert is state object
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2400);
  }
  const toggleStyle = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'black';
      showalert('Dark mode is enabled', 'success');
      // document.title = 'TextUtils - Dark-Mode';
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert('Light mode is enabled', 'success');
      // document.title = 'TextUtils - Light-Mode';
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" About="About" mode={mode} toggleStyle={toggleStyle} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<TextForm showalert={showalert} heading="Enter the text to analyze" mode={mode} />} />
            <Route path="/About" element={<About mode={mode} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

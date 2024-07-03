import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      <Router>
        <Navbar title="Textutils" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Textform showAlert={showAlert} heading="Enter Your Text to Analyze" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

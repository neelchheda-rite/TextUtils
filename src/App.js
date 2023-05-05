import './App.css';
import About from './components/About';
import Alerts from './components/Alerts';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);
    const showAlert = (message, type) => {
        setAlert({msg: message, type: type})
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = "#212529";
            document.body.style.color = "white";
            showAlert('Dark Mode enabled', 'success');
        } else {
            setMode('light');
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            showAlert('Light Mode enabled', 'success');
        }
    }
    return (
        <>
            <BrowserRouter>
                <Navbar mode={mode}
                    toggleMode={toggleMode}/>
                <Alerts alert={alert}/>
                <Routes>
                    <Route exact path='/'
                        element={
                            <div
                        className="container my-3"><TextForm showAlert={showAlert}
                        mode={mode}/>
                        </div>
                        }/>
                </Routes>
                <Routes>
                    <Route exact path='/about'
                        element={<About/>}/>
                </Routes>
            </BrowserRouter>
           
        </>
    );
}

export default App;

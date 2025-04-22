import React from "react";
import "./App.scss";
import Home from './components/Home'
import Login from './components/Login'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'

function App() {
    return (
        <div className="app-component">
            <Navbar />
            <Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
                <Route path="/contact" element={<Contact />} />
			</Routes>
        </div>
    )
}

export default App;

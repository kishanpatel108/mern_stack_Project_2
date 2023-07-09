import React from "react";
import "./App.css";
import Register from "./components/register";
import Login from "./components/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Navbar from "./components/navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          {/* <Login/> */}
          {/* <Register/> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

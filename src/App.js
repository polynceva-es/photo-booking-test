import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/pages/Homepage";
import Signin from "./components/pages/Signin";
import Signup from "./components/pages/Signup";


function App() {
  return (

      <>
        <Header/>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </>



  );
}

export default App;



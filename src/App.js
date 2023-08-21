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
          <Route path="/sign-in" element={<Signin/>}/>
          <Route path="/sign-up" element={<Signup/>}/>
          <Route path="/chat-room" element={<ChatRoom/>}/>
          <Route path="/chat" element={<Chat/>}/>
        </Routes>
      </>
  );
}

export default App;



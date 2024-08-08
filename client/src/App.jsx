import React from "react"
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import './App.css'
import { Join } from "./components/join";
import { Chat } from "./components/chat";

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Join />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App

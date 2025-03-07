import React from 'react';
import './App.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import MenuBar from './components/MenuBar.js';
import Index from './pages/Index/Index.js';
import Login from './pages/User/Login.js';
import Register from './pages/User/Register.js';
import AboutInfo from "./pages/About/AboutInfo.js";
import PrivacyPolicy from "./pages/Privacy/PrivacyPolicy.js";
import Support from './pages/Support/Support.js';
import Copyright from "./components/Copyright.js";
import ChatWindow from './pages/ChatWindow/ChatWindow.js';
function App() {
  return (
    <Router>
      <div className="App">
        <MenuBar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/chat" element={<ChatWindow />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<AboutInfo />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/support" element={<Support />} />
        </Routes>
        <Copyright />
      </div>
    </Router>
  );
}

export default App;

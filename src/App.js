import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import MenuBar from './components/MenuBar.js';
import Index from './pages/Index/Index.js';
import Login from './pages/User/Login.js';
import Register from './pages/User/Register.js';
import About from './pages/About/About.js';
import PrivacyPolicy from './pages/Privacy/PrivacyPolicy.js';
import Support from './pages/Support/Support.js';
import Copyright from "./components/Copyright.js";
import ChatWindow from './pages/ChatWindow/ChatWindow.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/chat" element={<ChatWindow />} />
          <Route path="/" element={<><MenuBar /><Index /></>} />
          <Route path="/login" element={<><MenuBar /><Login /></>} />
          <Route path="/register" element={<><MenuBar /><Register /></>} />
          <Route path="/about" element={<><MenuBar /><About /></>} />
          <Route path="/privacy" element={<><MenuBar /><PrivacyPolicy /></>} />
          <Route path="/support" element={<><MenuBar /><Support /></>} />
        </Routes>
        <Copyright />
      </div>
    </Router>
  );
}

export default App;

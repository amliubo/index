import React from 'react';
import './App.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import MenuBar from './components/MenuBar.js';
import Index from './pages/Index/Index.js';
import AboutInfo from "./pages/About/AboutInfo.js";
import PrivacyPolicy from "./pages/Privacy/PrivacyPolicy.js";
import Support from './pages/Support/Support.js';
import Copyright from "./components/Copyright.js";

function App() {
  return (
    <Router>
      <div className="App">
        <MenuBar />
        <Routes>
          <Route path="/" element={<Index />} />
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

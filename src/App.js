import React from 'react';
import './App.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import MenuBar from './components/MenuBar';
import Index from './pages/index/Index';
import AboutInfo from "./pages/about/AboutInfo";
import PrivacyPolicy from "./pages/privacy/PrivacyPolicy";
import Support from './pages/support/Support';
import Copyright from "./components/Copyright";

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

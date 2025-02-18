import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import "./Home.css";
import MenuBar from "../../components/MenuBar";
import Index from "../../components/Index";
import PrivacyPolicy from "../Privacy/PrivacyPolicy";
import AboutInfo from "../About/AboutInfo";
import Copyright from "../../components/Copyright";

function Home() {
    return (
        <Router>
            <div className="home-page">
                <MenuBar />
                <Routes>
                    <Route path="/index" element={<Index />} />
                    <Route path="/about" element={<AboutInfo />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                </Routes>
                <Copyright />
            </div>
        </Router>
    );
}

export default Home;

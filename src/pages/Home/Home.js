import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Home.css";
import MenuBar from "../../components/MenuBar";
import Index from "../../components/Index";
import PrivacyPolicy from "../../components/PrivacyPolicy";
import AboutInfo from "../../components/AboutInfo";
import Copyright from "../../components/Copyright";
function Home() {
    return (
        <Router>
            <div className="home-page">
                <MenuBar />
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/about" element={<AboutInfo />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                </Routes>
                <Copyright />
            </div>
        </Router>
    );
}

export default Home;

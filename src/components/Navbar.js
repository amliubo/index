// Navbar.js
import React from "react";
import "./Navbar.css";

const Navbar = () => {
    const navItems = [
        { name: "Home", link: "#home" },
        { name: "About", link: "#about" },
        { name: "Services", link: "#services" },
        { name: "Contact", link: "#contact" }
    ];

    return (
        <div className="navbar">
            <ul>
                {navItems.map((item, index) => (
                    <li key={index}>
                        <a href={item.link}>{item.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
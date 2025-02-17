import React from 'react';
import { Link } from 'react-router-dom';
import './MenuBar.css';

const MenuBar = () => {
    return (
        <div className="menu-bar">
            <Link to="/index" className="menu-item">主页</Link>
            <Link to="/about" className="menu-item">信息介绍</Link>
            <Link to="/privacy" className="menu-item">隐私协议</Link>
        </div>
    );
};

export default MenuBar;

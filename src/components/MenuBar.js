import React from "react";
import { Link } from "react-router-dom";
import "./MenuBar.css";

const MenuBar = () => {
    return (
        <div className="menu-bar">
            {/* 左侧 Logo */}
            <div className="menu-logo">
                <Link to="/">
                    <img src={`${process.env.PUBLIC_URL}/logo.png`} className="logo-img" alt="Logo" />
                </Link>
            </div>

            {/* 右侧按钮 */}
            <div className="menu-links">
                <Link to="/privacy" className="menu-item">隐私协议</Link>
                <Link to="/support" className="menu-item">支持中心</Link>
                <Link to="/login" className="menu-item primary-btn">登录</Link>
                <Link to="/register" className="menu-item primary-btn">注册</Link>
            </div>
        </div>
    );
};

export default MenuBar;

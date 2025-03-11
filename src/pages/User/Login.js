import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api";
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { data } = await loginUser(email, password);
            if (data.token) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("userEmail", email);
                navigate("/chat");
            } else {
                setError("登录失败，检查邮箱和密码");
            }
        } catch (err) {
            setError("登录失败，检查邮箱和密码");
            console.error(err.response?.data || err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            <h2>欢迎回来</h2>
            <form onSubmit={handleSubmit} className="form">
                <input
                    type="email"
                    className="input-field"
                    placeholder="请输入邮箱"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    className="input-field"
                    placeholder="请输入密码"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" className="btn-login" disabled={loading}>
                    {loading ? "加载中..." : "登录"}
                </button>
                {error && <div className="error-message">{error}</div>}
            </form>
        </div>
    );
};

export default Login;

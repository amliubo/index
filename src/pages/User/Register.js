import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../api";
import "./Register.css";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (password !== confirmPassword) {
            setError("密码不一致");
            setLoading(false);
            return;
        }

        try {
            const { data } = await registerUser(email, password);
            if (data.token) {
                localStorage.setItem("token", data.token);
                navigate("/chat");
            } else {
                setError("注册失败，请稍后再试");
            }
        } catch (err) {
            setError("注册失败，请稍后再试");
            console.error(err.response?.data || err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="register-container">
            <h2>创建一个新账号</h2>
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
                <input
                    type="password"
                    className="input-field"
                    placeholder="确认密码"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <button type="submit" className="btn-register" disabled={loading}>
                    {loading ? "加载中..." : "注册"}
                </button>
                {error && <div className="error-message">{error}</div>}
            </form>
        </div>
    );
};

export default Register;

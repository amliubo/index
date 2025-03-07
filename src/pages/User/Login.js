import React, { useState } from 'react';
import { loginUser } from '../../api';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await loginUser(email, password);  // 使用 api.js 中的 loginUser 函数
            console.log('登录成功', response.data);
            // 在这里处理登录成功后的逻辑
        } catch (err) {
            setError('登录失败，请检查邮箱和密码');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            <h2>登录</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    type="email"
                    placeholder="请输入邮箱"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="input-field"
                />
                <input
                    type="password"
                    placeholder="请输入密码"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="input-field"
                />
                <button type="submit" className="btn-login" disabled={loading}>
                    {loading ? '登录中...' : '登录'}
                </button>
            </form>
        </div>
    );
};

export default Login;

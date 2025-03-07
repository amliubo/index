import React, { useState } from 'react';
import { registerUser } from '../../api';
import './Register.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('密码不一致');
            return;
        }

        setLoading(true);

        try {
            const response = await registerUser(email, password);
            console.log('注册成功', response.data);
            // 注册成功后可以跳转到登录页或直接登录
        } catch (err) {
            setError('注册失败，请稍后重试');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="register-container">
            <h2>注册</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit} className="register-form">
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
                <input
                    type="password"
                    placeholder="确认密码"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="input-field"
                />
                <button type="submit" className="btn-register" disabled={loading}>
                    {loading ? '注册中...' : '注册'}
                </button>
            </form>
        </div>
    );
};

export default Register;

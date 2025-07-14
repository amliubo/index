// src/api.js

import axios from 'axios';

const API_URL = 'http://139.196.252.254:88';

// 登录接口
export const loginUser = (email, password) => {
    return axios.post(`${API_URL}/login`, { email, password });
};

// 注册接口
export const registerUser = (email, password) => {
    return axios.post(`${API_URL}/register`, { email, password });
};

// 会话接口，支持流式处理
export const ChatMsg = async (sessionId, token, message) => {
    const response = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ session_id: sessionId, token: token, message: message }),
    });

    if (!response.ok) {
        throw new Error('请求失败');
    }
    return response;
};

// src/api.js

import axios from 'axios';

// 设置基础的API URL
const API_URL = 'https://your-api-url';

// 登录接口
export const loginUser = (email, password) => {
    return axios.post(`${API_URL}/login`, { email, password });
};

// 注册接口
export const registerUser = (email, password) => {
    return axios.post(`${API_URL}/register`, { email, password });
};

// 你可以继续添加其他 API 函数，例如获取用户信息、退出登录等

import axios from 'axios';
import { CONFIG } from '@/config';
import {JWT} from "@/utils/jwt";

// 创建 axios 实例
const request = axios.create({
    baseURL: CONFIG.apiURI,
    timeout: CONFIG.timeout,
});

// 添加请求拦截器
request.interceptors.request.use(config => {
    // 在发送请求之前做些什么，例如添加 token
    if (JWT.getToken() != null) {
        config.headers.Authorization = JWT.getToken();
    }
    return config;
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
request.interceptors.response.use(response => {
    // 对响应数据做点什么
    return response.data;
}, error => {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default request;

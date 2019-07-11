import { post } from './axios';

// 登陆
export const login = (login, loginParams) => post(login, loginParams);

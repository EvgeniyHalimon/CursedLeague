import { ITokens } from '../types';

export const saveTokens = (data: ITokens) => {
  localStorage.setItem('appName_accessToken', data.accessToken);
  localStorage.setItem('appName_refreshToken', data.refreshToken);
};

export const removeTokens = () => {
  localStorage.removeItem('appName_accessToken');
  localStorage.removeItem('appName_refreshToken');
};

export const getRefreshToken = () => {
  return localStorage.getItem('appName_refreshToken') ?? '';
};

export const getAccessToken = () => {
  return localStorage.getItem('appName_accessToken') ?? '';
};
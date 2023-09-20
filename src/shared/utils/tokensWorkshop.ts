import { localStorageKeys } from '../constants';
import { ITokens } from '../types';

export const saveTokens = (data: ITokens) => {
  localStorage.setItem(localStorageKeys.cursedLeague_accessToken, data.accessToken);
  localStorage.setItem(localStorageKeys.cursedLeague_refreshToken, data.refreshToken);
};

export const removeTokens = () => {
  localStorage.removeItem(localStorageKeys.cursedLeague_accessToken);
  localStorage.removeItem(localStorageKeys.cursedLeague_refreshToken);
};

export const getRefreshToken = () => {
  return localStorage.getItem(localStorageKeys.cursedLeague_refreshToken) ?? '';
};

export const getAccessToken = () => {
  return localStorage.getItem(localStorageKeys.cursedLeague_accessToken) ?? '';
};
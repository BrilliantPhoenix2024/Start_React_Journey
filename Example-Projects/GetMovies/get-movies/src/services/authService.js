import axiosClient from "./axiosClient";
import apiEndpoint from "../config.json";
import { jwtDecode } from "jwt-decode";

const apiAuth = apiEndpoint + "/auth";
const tokenKey = "token";

export async function login(email, password) {
  const { data: jwt } = await axiosClient.post(apiAuth, { email, password });
  localStorage.setItem(tokenKey, jwt);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

// authService.js
export function logoutUser() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    if (jwt) {
      return jwtDecode(jwt);
    }
  } catch (error) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  loginWithJwt,
  logoutUser,
  getCurrentUser,
  getJwt,
};

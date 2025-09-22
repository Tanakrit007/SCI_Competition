import api from "./api.js";
import tokenService from "./token.service.js";

const AUTH_API = "/auth";

const register = async (userData) => {
  return await api.post(API_URL + /signup, userData);
};

const login = async (username, password) => {
  const response = await api.post(`${AUTH_API}/signin`, { username, password });

  // save user data to local storage
  if (response.data.accessToken) {
    tokenService.setUser(response.data);
  }

  return response;
};

const logout = () => {
  tokenService.removeUser();
};

const authService = {
  register,
  login,
  logout,
};

export default authService;

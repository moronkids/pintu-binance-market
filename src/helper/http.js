import axios from "axios";

export const base = "https://www.binance.com";
export const base_ = "https://api.binance.com";

const TOKEN = localStorage.getItem("tokenGen");
export const http = axios.create({
  timeout: 60000,
  withCredentials: false,
  headers: {},
});

http.interceptors.request.use(
  async (request) => {
    const token = TOKEN;
    if (token !== null) request.headers.Authorization = `Bearer ${token}`;
    return await request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  async (response) => {
    return await response;
  },
  (error) => {
    if (error.response) {
      const { data } = error.response;
      if (error.response.status === 401) {
        if (
          data.name === "NotAuthenticated" &&
          data.data &&
          data.data.name === "TokenExpiredError"
        ) {
          return Promise.reject({
            message: "Token expired. Please try login again.",
          });
        } else {
          return Promise.reject({
            message: "Login failed. Please check your email and password!",
          });
        }
      } else {
        const message = data.message || error.message;
        return Promise.reject({ message, raw: data });
      }
    } else if (error.request) {
      return Promise.reject({
        message:
          "There is problem connecting to server. Please check your connection!",
      });
    } else {
      return Promise.reject({ message: error.message });
    }
  }
);

export default http;

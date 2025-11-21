import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5555/api",
});

axiosInstance.interceptors.request.use((config) => {
  if (
    !config.url.includes("/auth/login") &&
    !config.url.includes("/auth/signup")
  ) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export default axiosInstance;

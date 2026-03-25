import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://localhost:7161/api",  // .NET API URL
  headers: {
    "Content-Type": "application/json"
  }
});

// Attach JWT Automatically
axiosInstance.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem("admin"));
  if (user?.jwt) {
    config.headers.Authorization = `Bearer ${user.jwt}`;
  }
  return config;
});

export default axiosInstance;
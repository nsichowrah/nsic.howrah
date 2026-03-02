import axios from "axios";

<<<<<<< HEAD
const API = axios.create({
  baseURL: "https://backend-ten-alpha-44.vercel.app/"
  
});

export const getLatestSensorData = () =>
  API.get("https://backend-ten-alpha-44.vercel.app//api/sensor/latest");
=======
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "https://backend-ten-alpha-44.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export const getHealthStatus = () => api.get("/health");
export const postContactMessage = (payload) => api.post("/contact", payload);
export const getProjects = (params = {}) => api.get("/projects", { params });
export const getDownloads = () => api.get("/downloads");

export default api;
>>>>>>> af693b5 (NSIC frontend update)

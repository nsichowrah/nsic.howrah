import axios from "axios";

const API = axios.create({
  baseURL: "https://backend-ten-alpha-44.vercel.app/"
  
});

export const getLatestSensorData = () =>
  API.get("/api/sensor/latest");

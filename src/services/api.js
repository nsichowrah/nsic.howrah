import axios from "axios";

const API = axios.create({
  baseURL: "https://backend-ten-alpha-44.vercel.app/"
  
});

export const getLatestSensorData = () =>
  API.get("https://backend-ten-alpha-44.vercel.app//api/sensor/latest");

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
  // baseURL: "https://gas-service-server.vercel.app/api",
});

export default api;

import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000", // Ganti sesuai URL backend-mu
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;

import axios from "axios";

const instance = axios.create({
  baseURL: "http://backend/api",
});

export default instance;

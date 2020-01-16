import axios from "axios";

const api = axios.create({
  baseURL: "http://cf5e978b.ngrok.io/api"
});

export default api;

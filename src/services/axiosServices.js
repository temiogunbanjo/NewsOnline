import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
// Add a request interceptor
const axiosServices = axios.create({ BASE_URL });
// Request call
axiosServices.interceptors.request.use(
  async (config) => {
    config.headers["x-api-key"] = process.env.REACT_APP_API_KEY || "";
    config.headers["mode"] = 'no-cors';
    // config.url = BASE_URL + config.url;
    return config;
  },
  (error) => Promise.reject(error)
);

// Response call
axiosServices.interceptors.response.use(
  (next) => Promise.resolve(next.data),
  (error) => Promise.reject(error)
);

export default axiosServices;

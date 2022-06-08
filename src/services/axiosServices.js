import axios from 'axios';
import { BASE_URL } from '../configs/api';

// Add a request interceptor
const axiosServices = axios.create({ BASE_URL });
// Request call
axiosServices.interceptors.request.use(
  async (config) => {
    const apikey = "91f34d53ca4f495a82117a5fe70f2455";

    if (apikey) {
      config.headers["x-api-key"] = `${apikey}`;
    }
    config.url = BASE_URL + config.url;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response call
axiosServices.interceptors.response.use(
  (next) => {
    return Promise.resolve(next.data);
  },
  (error) => {
    // You can handle error here and trigger warning message without get in the code inside
    return Promise.reject(error);
  },
);

export default axiosServices;

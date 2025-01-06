import axios from "axios";
import { toast } from "react-toastify";
import logger from "./logService";

const axiosClient = axios.create({
  baseURL: "http://jsonplaceholder.typicode.com",
  timeout: 5000,
});

// Response interceptor
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const status = error.response.status;

      switch (status) {
        case 404:
          toast("Item not found. It may have already been deleted.");
          break;
        case 403:
          toast("You don't have permission to perform this action.");
          break;
        default:
          toast(`Server error: ${status}`);
      }
    } else if (error.request) {
      toast("Network error. Please check your connection.");
    } else {
      toast("An unexpected error occurred.");
    }

    logger.log(error);
    return Promise.reject(error);
  }
);

export default {
  get: axiosClient.get,
  post: axiosClient.post,
  put: axiosClient.put,
  delete: axiosClient.delete,
};

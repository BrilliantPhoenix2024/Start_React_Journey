import axios from "axios";
import { toast } from "react-toastify";
import Raven from "raven-js";

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

      if (status === 404) {
        toast("Item not found. It may have already been deleted.");
      } else if (status === 403) {
        toast("You don't have permission to perform this action.");
      } else {
        toast(`Server error: ${status}`);
      }

      Raven.captureException(error.response.data);
    } else if (error.request) {
      toast("Network error. Please check your connection.");
      Raven.captureException(error.request);
    } else {
      toast("An unexpected error occurred.");
      Raven.captureException(error.message);
    }

    return Promise.reject(error); // Let the component handle fallback if needed
  }
);

export default {
  get: axiosClient.get,
  post: axiosClient.post,
  put: axiosClient.put,
  delete: axiosClient.delete,
};

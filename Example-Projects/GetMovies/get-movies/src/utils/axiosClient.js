import axios from "axios";

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
        alert("Item not found. It may have already been deleted.");
      } else if (status === 403) {
        alert("You don't have permission to perform this action.");
      } else {
        alert(`Server error: ${status}`);
      }

      console.error("Expected error:", error.response.data);
    } else if (error.request) {
      alert("Network error. Please check your connection.");
      console.error("Unexpected error: No response received", error.request);
    } else {
      alert("An unexpected error occurred.");
      console.error("Unexpected error:", error.message);
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


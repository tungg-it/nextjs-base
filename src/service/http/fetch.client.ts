import axios from "axios";
import { env } from "@/libs/env";

const apiClient = axios.create({
  baseURL: env.api.baseUrl,
  timeout: 10000, // Set a timeout for requests
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

// Add a request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // You can add token here if needed
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config.data;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // You can handle global errors here
    // Example: if (error.response.status === 401) { ... }
    if (error.response && error.response.status === 401) {
      // Handle unauthorized access, e.g., redirect to login
      // Optionally, you can clear the token or redirect
    }
    return Promise.reject(error);
  }
);
export default apiClient;

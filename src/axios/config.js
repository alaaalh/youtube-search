import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyCvzSQHj3sFtgfinrc4z7KHWDhmDqHJL7w",
    maxResults: 6,
  },
  headers: {
    Accept: "application/json",
  },
});







export default axiosInstance;

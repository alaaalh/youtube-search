import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyBzsgKRU9oV5KifLzvvDgBLiEpuZBYdXfk",
    maxResults: 3,
  },
  headers: {
    Accept: "application/json",
  },
});
// AIzaSyCsd8pviaQkFX_T7whMfXs9CfUkId_fO3w

// AIzaSyBzsgKRU9oV5KifLzvvDgBLiEpuZBYdXfk


  






export default axiosInstance;

import axios from "axios";

const axiosInstance = axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3',
  headers: {
    Accept: 'application/json'
  }
});

export default axiosInstance;



import axios from "axios";

const axiosInstance = axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3/search?key=AIzaSyBE0MHfOI_OQMuJWThQ6GLp3OygmKPirPM&maxResults=50&',
  headers: {
    Accept: 'application/json'
  }
});

export default axiosInstance;



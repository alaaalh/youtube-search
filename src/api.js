import axiosInstance from './axios/config';

export const GetData = {
    get(url){
        return  axiosInstance.get(`/search?key=AIzaSyB1CtUHLCws4tIjWyRWxomqKZzEczNtgkU&q=${url}`)
    }
}
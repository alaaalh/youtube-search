import axiosInstance from './axios/config';

export const GetData = {
    get(url){
        return  axiosInstance.get(`q=${url}`)
    },

    getByType(url , type){
        return  axiosInstance.get(`q=${url}&type=${type}`)
    },

    getByTime(url , type , durationTime){
        return  axiosInstance.get(`q=${url}&type=${type}&videoDuration=${durationTime}`)
    }
}
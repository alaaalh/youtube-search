import axiosInstance from '../axios/config';

export const GetData = {
    get(url ){
        return  axiosInstance.get(`search?part=snippet&q=${url}`)
    },

    getStatics(url , playlistId){
        return axiosInstance.get(`search?port=statistics&q=${url}&id=${playlistId}`)
    },

    getByType(url , type){
        return  axiosInstance.get(`search?part=snippet&q=${url}&type=${type}`)
    },

    getByTime(url , type , durationTime){
        return  axiosInstance.get(`&q=${url}&type=${type}&videoDuration=${durationTime}`)
    },

    getViews(videoId){
        return axiosInstance.get(`videos?part=statistics&id=${videoId}`)
    },
}
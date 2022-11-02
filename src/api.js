import axiosInstance from './axios/config';

export const GetData = {
    get(url ){
        console.log('url', url);
        return  axiosInstance.get(`search?part=snippet&type=video&q=${url}`)
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

    getChannel(url){
        return axiosInstance.get(`channels?forUsername=${url}&port=snippet&thumbnails=default`)
    },
    
    postThumbnails (url){
        return axiosInstance.post(`thumbnails/set?videoId=${url}`)
    }
}
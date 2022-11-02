export const storeData = (payload) => {
    return {
        type: 'STORE_DATA',
        payload,
    }
}

export const totalResult = (payload)=>{
    return{
        type: 'TOTAL_RESULT',
        payload
    }
}

export const Loading = (payload) => {
    return {
        type: 'LOADING',
        payload
    }
}

export const viewsCounter = (payload) => {
    return {
        type:'VIEWS',
        payload
    }
}
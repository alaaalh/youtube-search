const INITIAL_STATE = {
    currentData : []
}

export default function data(state = INITIAL_STATE , action){
    switch (action.type){
        case 'STORE_DATA':
        return {
            ...state, 
            currentData : action.payload
        };
        default:
        return state;
    }
}
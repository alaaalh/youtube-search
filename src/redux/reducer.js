const INITIAL_STATE = {
  currentData: [],
  totalCount:'',
  currentChannel: '',
  isLoading: false
};


export default function data(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "STORE_DATA":
      return {
        ...state,
        currentData: action.payload,
      }
    case "TOTAL_RESULT":
      return {
        ...state,
        totalCount: action.payload,
      }
    case 'CHANNEL':
      return{
        ...state,
        currentChannel : action.payload
      }
    case 'LOADING':
      return{
        ...state,
        isLoading: action.payload
      }
    default:
      return state;
  }
}

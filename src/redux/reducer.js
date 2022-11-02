const INITIAL_STATE = {
  currentData: [],
  totalCount: "",
  currentChannel: "",
  isLoading: false,
  currentlyViews: {}
};

export default function data(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "STORE_DATA":
      return {
        ...state,
        currentData: action.payload,
      };
    case "TOTAL_RESULT":
      return {
        ...state,
        totalCount: action.payload,
      };
    case "LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "VIEWS":
      return {
        ...state,
        currentlyViews: action.payload,
      };
    default:
      return state;
  }
}

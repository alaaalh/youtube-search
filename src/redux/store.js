import { createStore } from "redux";
import reducer from "./reducer";

const composeEnhancers = "__REDUX_DEVTOOLS_EXTENSION" && "__REDUX_DEVTOOLS_EXTENSION()"

const store = createStore(reducer, composeEnhancers);

export default store;

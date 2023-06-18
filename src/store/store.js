// store.js
import { createStore } from "redux";
import numbersReducer from "../reducers/reducer";
const store = createStore(numbersReducer);
export default store;

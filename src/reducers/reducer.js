// reducers.js
import { ADD_MOVIE, DELETE_MOVIE } from "../actions/actions";

const initialState = [];

const numbersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return [...state, action.payload];
    case DELETE_MOVIE:
      return state.filter((Object) => Object.id !== action.payload.id);
    default:
      return state;
  }
};

export default numbersReducer;

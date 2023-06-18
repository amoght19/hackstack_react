// actions.js
export const ADD_MOVIE = "ADD_MOVIE";
export const DELETE_MOVIE = "DELETE_MOVIE";

export const addMovie = (Object) => {
  return {
    type: ADD_MOVIE,
    payload: Object,
  };
};

export const deleteMovie = (Object) => {
  return {
    type: DELETE_MOVIE,
    payload: Object,
  };
};

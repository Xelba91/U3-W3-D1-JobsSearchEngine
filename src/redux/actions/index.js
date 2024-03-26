export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const GET_JOBS = "GET_JOBS";

export const addToFavouriteAction = (data) => {
  return {
    type: ADD_TO_FAVOURITE,
    payload: data.company_name,
  };
};

export const removeFromFavouriteAction = (data) => {
  return {
    type: REMOVE_FROM_FAVOURITE,
    payload: data.company_name,
  };
};

export const removeFromFavouriteAction2 = (fav) => {
  return {
    type: REMOVE_FROM_FAVOURITE,
    payload: fav,
  };
};

import * as ActionTypes from "./ActionTypes";

export const fetchRestaurants = () => dispatch => {
  dispatch(restaurantsLoading());

  return fetch(baseUrl + "restaurants")
    .then(
      response => {
        if (response.ok) {
          return response;
        } else {
          let error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      error => {
        let errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then(response => response.json())
    .then(promos => dishpatch(addRestaurants(restaurants)))
    .catch(error => dispatch(restaurantsFailed(error.message)));
};

export const restaurantsLoading = () => ({
  type: ActionTypes.RESTAURANTS_LOADING
});

export const restaurantsFailed = errmess => ({
  type: ActionTypes.RESTAURANTS_FAILED,
  payload: errmess
});

export const addRestaurants = restaurants => ({
  type: ActionTypes.ADD_RESTAURANTS,
  payload: restaurants
});

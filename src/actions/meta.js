export const SET_SEARCH_TYPE = "SET_SEARCH_TYPE";
export const GET_GENRES = "GET_GENRES";
export const RECEIVE_GENRES = "RECEIVE_GENRES";

export function setSearchType(searchType) {
  return {
    type: SET_SEARCH_TYPE,
    payload: searchType
  }
}

export function getGenres(searchString) {
  return dispatch => {
    dispatch({type: GET_GENRES})

    return window.fetch(searchString).then(response => response.json()).then((results) => {
      dispatch({
        type: RECEIVE_GENRES,
        payload: results
      })
    });
  }
}
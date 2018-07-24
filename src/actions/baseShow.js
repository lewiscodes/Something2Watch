export const SET_SEARCH_STRING = "SET_SEARCH_STRING";
export const SEARCH_BASE_SHOW = "SEARCH_BASE_SHOW";
export const RECEIVE_BASE_SHOW_SEARCH_RESULTS = "RECEIVE_BASE_SHOW_SEARCH_RESULTS";
export const RECEIVE_BASE_SHOW_EXTRA_SEARCH_RESULTS = "RECEIVE_BASE_SHOW_EXTRA_SEARCH_RESULTS";
export const RESET_SEARCH = "RESET_SEARCH";
export const SET_BASE_SHOW = "SET_BASE_SHOW";
export const GET_BASE_SHOW_RESULTS_API_ID = "GET_RESULTS_API_ID";
export const RECEIVE_BASE_SHOW_RESULTS_API_ID = "RECEIVE_BASE_SHOW_RESULTS_API_ID";
export const GET_BASE_SHOW_GENRES_FROM_RESULTS_API = "GET_BASE_SHOW_GENRES_FROM_RESULTS_API";
export const RECEIVE_BASE_SHOW_GENRES_FROM_RESULTS_API = "RECEIVE_BASE_SHOW_GENRES_FROM_RESULTS_API";

export function setBaseShow(baseShow) {
  return {
    type: SET_BASE_SHOW,
    payload: baseShow
  }
}

export function resetSearch() {
  return {type: RESET_SEARCH}
}

export function setSearchString(searchString) {
  return {
    type: SET_SEARCH_STRING,
    payload: searchString
  };
}

export function searchForBaseShow(mainQueryString, extraInfoQueryString) {
  return dispatch => {
    dispatch({type: SEARCH_BASE_SHOW});

    return window.fetch(mainQueryString).then(response => response.json()).then(((results) => {
      if (results.Response === 'True') {
        results.Search.map((result) => {
          return dispatch(getExtraInfo(`${extraInfoQueryString}${result.imdbID}`))
        });
      }

      dispatch({
        type: RECEIVE_BASE_SHOW_SEARCH_RESULTS,
        payload: results
      });
    }));
  }
}

function getExtraInfo(queryString) {
  return dispatch => {
    dispatch({type: SEARCH_BASE_SHOW});

    return window.fetch(queryString).then(response => response.json()).then(((result) => {
      dispatch({
        type: RECEIVE_BASE_SHOW_EXTRA_SEARCH_RESULTS,
        payload: result
      });
    }));
  }
}

export function getResultsApiId(searchString, searchType) {
  return dispatch => {
    dispatch({type: GET_BASE_SHOW_RESULTS_API_ID});

    return window.fetch(searchString).then(response => response.json()).then((results) => {
      if (searchType === 'Tv') {
        dispatch({
          type: RECEIVE_BASE_SHOW_RESULTS_API_ID,
          payload: results.tv_results[0].id
        })
      } else {
        dispatch({
          type: RECEIVE_BASE_SHOW_RESULTS_API_ID,
          payload: results.movie_results[0].id
        })
      }
    });
  }
}

export function getBaseShowGenres(searchString) {
  return dispatch => {
    dispatch({type: GET_BASE_SHOW_GENRES_FROM_RESULTS_API});

    return window.fetch(searchString).then(response => response.json()).then((results) => {
      dispatch({
        type: RECEIVE_BASE_SHOW_GENRES_FROM_RESULTS_API,
        payload: results.genres
      });
    });
  }
}
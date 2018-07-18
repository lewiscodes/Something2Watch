export const SET_SEARCH_STRING = "SET_SEARCH_STRING";
export const SEARCH_BASE_SHOW = "SEARCH_BASE_SHOW";
export const RECEIVE_BASE_SHOW_SEARCH_RESULTS = "RECEIVE_BASE_SHOW_SEARCH_RESULTS";
export const RECEIVE_BASE_SHOW_EXTRA_SEARCH_RESULTS = "RECEIVE_BASE_SHOW_EXTRA_SEARCH_RESULTS";
export const RESET_SEARCH = "RESET_SEARCH";
export const SET_BASE_SHOW = "SET_BASE_SHOW";

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
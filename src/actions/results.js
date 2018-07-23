export const SEARCH_RESULTS = "GET_RESULTS";
export const RECEIVE_RESULTS = "RECEIVE_RESULTS";

export function getResults(searchString) {
  return dispatch => {
    dispatch({type: SEARCH_RESULTS});

    return window.fetch(searchString).then(response => response.json()).then((results) => {
      if (results.Response === 'True') {
        dispatch({
          type: RECEIVE_RESULTS,
          payload: results
        });
      }
    });
  }
}
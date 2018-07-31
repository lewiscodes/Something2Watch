import { getGenreIdsFromObject, getResultIDs } from '../helpers';

export const GET_RESULTS = "GET_RESULTS";
export const RECEIVED_SELECTED_BASE_SHOW_ID = "RECEIVED_SELECTED_BASE_SHOW_ID";
export const RECEIVED_SELECTED_BASE_SHOW_GENRES = "RECEIVED_SELECTED_BASE_SHOW_GENRES";
export const RECEIVED_INITIAL_RESULTS = "RECEIVED_INITIAL_RESULTS";
export const RECEIVED_RESULTS_IMDB_IDS = "RECEIVED_RESULTS_IMDB_IDS";
export const RECEIVED_FULL_RESULTS = "RECEIVED_FULL_RESULTS";
export const RESET_RESULTS = "RESET_RESULTS";

export function resetResults() {
  return {type: RESET_RESULTS};
}

export function getResults(meta, baseShow) {
  return dispatch => {
    dispatch({type: GET_RESULTS});

    return getSelectedBaseShowId(meta.resultsApi, meta.searchType, baseShow.baseShowImdbId).then((response) => {
      return new Promise(function(resolve) {
        dispatch({
          type: RECEIVED_SELECTED_BASE_SHOW_ID,
          payload: response
        });

        resolve(response);
      });
    }).then((response) => {
      return getSelectedBaseShow(meta.resultsApi, meta.searchType, response).then((response) => {
        return new Promise(function(resolve) {
          dispatch({
            type:RECEIVED_SELECTED_BASE_SHOW_GENRES,
            payload: response.genres
          });

          resolve(response.genres);
        });
      });
    }).then((response) => {
      return getInitialResults(meta.resultsApi, meta.searchType, response).then((response) => {
        return new Promise(function(resolve) {
          dispatch({
            type: RECEIVED_INITIAL_RESULTS,
            payload: response
          });

          resolve(response);
        });
      });
    }).then((response) => {
      return getResultsImdbIds(meta.resultsApi, meta.searchType, response).then((response) => {
        return new Promise(function(resolve) {
          dispatch({
            type: RECEIVED_RESULTS_IMDB_IDS,
            payload: response
          });

          resolve(response);
        });
      });
    }).then((response) => {
      return getFullResults(meta.api, response).then((response) => {
        return new Promise(function(resolve) {
          dispatch({
            type: RECEIVED_FULL_RESULTS,
            payload: response
          });

          resolve(response);
        });
      });
    });
  };
};

function getSelectedBaseShowId(api, searchType, baseShowImdbId) {
  const { baseRequestUrl, key } = api;
  const selectedBaseShowIdApiUrl = `${baseRequestUrl}find/${baseShowImdbId}${key}&external_source=imdb_id`;

  return new Promise(function(resolve) {
    return window.fetch(selectedBaseShowIdApiUrl).then(response => response.json()).then((results) => {
      if (searchType === 'Tv') {
        return resolve(results.tv_results[0].id);
      } else {
        return resolve(results.movie_results[0].id);
      }
    });
  });
};

function getSelectedBaseShow(api, searchType, baseShowId) {
  const { baseRequestUrl, key } = api;
  const selectedSearchType = searchType === 'Tv' ? 'tv' : 'movie';
  const selectedBaseShowApiUrl = `${baseRequestUrl}${selectedSearchType}/${baseShowId}${key}`;

  return new Promise(function(resolve) {
    return window.fetch(selectedBaseShowApiUrl).then(response => response.json()).then((response) => {
      return resolve(response);
    });
  });
};

function getInitialResults(api, searchType, genres) {
  const { baseRequestUrl, key } = api;
  const selectedSearchType = searchType === 'Tv' ? 'tv' : 'movie';
  const includeGenres = getGenreIdsFromObject(genres);
  const initialResultsApiUrl = `${baseRequestUrl}discover/${selectedSearchType}${key}&with_genres=${includeGenres}`;

  return new Promise(function(resolve) {
    return window.fetch(initialResultsApiUrl).then(response => response.json()).then((response) => {
      return resolve(response);
    });
  });
};

function getResultsImdbIds(api, searchType, basicResults) {
  const { baseRequestUrl, key } = api;
  const selectedSearchType = searchType === 'Tv' ? 'tv' : 'movie';
  const resultIds = getResultIDs(basicResults.results);
  let resultsArray = [];

  return new Promise(function(resolve) {
    let errors = 0;
    for (let x = 0; x < resultIds.length; x++) {
      const resultsImdbIdApiUrl = `${baseRequestUrl}${selectedSearchType}/${resultIds[x]}/external_ids${key}`;
      // eslint-disable-next-line
      window.fetch(resultsImdbIdApiUrl).then(response => response.json()).then((response) => {
        if (response.imdb_id === null) {
          errors++;
        } else {
          resultsArray = resultsArray.concat(response.imdb_id);
        }
  
        if ((resultsArray.length + errors) === resultIds.length) {
          return resolve(resultsArray);
        };
      });
    };
  });
};

function getFullResults(api, imdbIds) {
  const { baseRequestUrl, searchByImdbId } = api;
  let resultsArray = [];

  return new Promise(function(resolve) {
    for (let x = 0; x < imdbIds.length; x++) {
      const fullResultsApiUrl = `${baseRequestUrl}${searchByImdbId}${imdbIds[x]}`
      // eslint-disable-next-line
      window.fetch(fullResultsApiUrl).then(response => response.json()).then((response) => {
        resultsArray = resultsArray.concat(response);

        if(resultsArray.length === imdbIds.length) {
          resolve(resultsArray);
        };
      });
    }
  });
};
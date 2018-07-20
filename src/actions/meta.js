export const SET_SEARCH_TYPE = "SET_SEARCH_TYPE";

export function setSearchType(searchType) {
  return {
    type: SET_SEARCH_TYPE,
    payload: searchType
  }
}
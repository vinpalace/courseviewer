import { getAuthors } from "../api/authorApi";

export const fetchAuthors = () => {
  return dispatch => {
    getAuthors().then(authors => {
      return dispatch({
        type: "GET_AUTHORS",
        authors: authors
      });
    });
  };
};

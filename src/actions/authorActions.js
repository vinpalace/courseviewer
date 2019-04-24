import { getAuthors } from "../api/authorApi";

export const fetchAuthors = () => {
  return dispatch => {
    getAuthors().then(authors => {
      console.log(authors);
      return dispatch({
        type: "GET_AUTHORS",
        authors: authors
      });
    });
  };
};

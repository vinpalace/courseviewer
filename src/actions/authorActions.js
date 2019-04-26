import { getAuthors } from "../api/authorApi";

export const fetchAuthors = () => {
  return dispatch => {
    getAuthors().then(authors => {
<<<<<<< HEAD
=======
      console.log(authors);
>>>>>>> Saving
      return dispatch({
        type: "GET_AUTHORS",
        authors: authors
      });
    });
  };
};

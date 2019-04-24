import initState from "./initState";

const authorReducer = (state = initState.authors, action) => {
  switch (action.type) {
    case "GET_AUTHORS":
      console.log("FIRING GET_AUTHORS");
      console.log(action);
      return action.authors;
    default:
      return state;
  }
};

export default authorReducer;

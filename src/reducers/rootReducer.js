import courseReducer from "./courseReducer";
import { combineReducers } from "redux";
import authorReducer from "./authorReducer";

export default combineReducers({
  courses: courseReducer,
  authors: authorReducer
});

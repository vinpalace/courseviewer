import initState from "./initState";

const courseReducer = (state = initState.courses, action) => {
  switch (action.type) {
    case "GET_COURSES":
      console.log(action);
      return action.courses;
    default:
      return state;
  }
  // if ((action.type = "GET_COURSES")) {
  //   console.log(action);
  //   let newCourses = action.courses;
  //   console.log("From get_courses", newCourses);
  //   return [...newCourses];
  // }
  // return state;
};

export default courseReducer;

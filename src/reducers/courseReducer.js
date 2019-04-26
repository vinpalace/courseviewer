import initState from "./initState";

const courseReducer = (state = initState.courses, action) => {
  switch (action.type) {
    case "GET_COURSES":
      console.log(action);
      return action.courses;
    case "ADD_COURSE":
      console.log("ADD COURSE FIRED");
      console.log(action);
      console.log([...state, action.course]);

      return [...state, action.course];
    case "DELETE_COURSE":
      console.log("DELETE COURSE FIRED");
      let courseId = action.courseId;
      let courses = state.filter(course => {
        return course.id != courseId;
      });
      console.log(courses);
      return courses;
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

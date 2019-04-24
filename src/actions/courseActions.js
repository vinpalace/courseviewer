import { getCourses } from "../api/courseApi";

export const fetchCourses = () => {
  return dispatch => {
    getCourses().then(courses => {
      console.log("print from courseAction", courses);
      return dispatch({
        type: "GET_COURSES",
        courses: courses
      });
    });
  };
};

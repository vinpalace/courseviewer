<<<<<<< HEAD
import { getCourses, saveCourse, deleteCourse } from "../api/courseApi";
=======
import { getCourses } from "../api/courseApi";
>>>>>>> Saving

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
<<<<<<< HEAD

export const addCourse = course => {
  console.log("from actions", course);
  return dispatch => {
    saveCourse(course).then(() => {
      console.log("priniting from addCourse", course);
      return dispatch({
        type: "ADD_COURSE",
        course: course
      });
    });
  };
};

export const removeCourse = courseId => {
  console.log("Got ID to delete", courseId);
  return dispatch => {
    deleteCourse(courseId).then(() => {
      console.log("Deleted", courseId);
      return dispatch({
        type: "DELETE_COURSE",
        courseId: courseId
      });
    });
  };
};
=======
>>>>>>> Saving

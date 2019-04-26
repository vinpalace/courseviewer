import { takeEvery, put, all, call } from "redux-saga/effects";
import { saveCourse, getCourses, deleteCourse } from "../api/courseApi";

function* courseAdd(action) {
  console.log("SAGA COURSE ADDING", action);
  //   saveCourse(course.course).then(function*() {
  //     console.log("FIRING FOR EFFECT");
  //     yield put({ type: "ADD_COURSE_SAGA", course: course });
  //   });
  yield call(saveCourse, action.course);
  yield put({ type: "ADD_COURSE_SAGA", course: action.course });
}

function* fetchCourses() {
  console.log("SAGA FETCHING COURSES");
  //   getCourses().then(function*(courses) {
  //     console.log("FIRING GETCOURSES FROM SAGA", courses);
  //     yield put({
  //       type: "GET_COURSES_SAGA",
  //       courses: courses
  //     });
  //   });
  var courses = yield call(getCourses);
  yield put({
    type: "GET_COURSES_SAGA",
    courses: courses
  });
}

// getCourses().then(courses => {
//     console.log(courses);
//     yield put({
//               type: "GET_COURSES_SAGA",
//               courses: courses
//     });
//   });
// }

function* removeCourse(action) {
  console.log("SAGA DELETING COURSE");
  //   deleteCourse(courseId).then(function*() {
  //     console.log("FIRING DELETECOURSE FROM SAGA");
  //     yield put({
  //       type: "DELETE_COURSE_SAGA",
  //       courseId: courseId
  //     });
  //   });
  console.log("GOT ID", action.courseId);
  yield call(deleteCourse, action.courseId);
  yield put({ type: "DELETE_COURSE_SAGA", courseId: action.courseId });
}

export default function* watchAll() {
  yield all([
    takeEvery("ADD_COURSE", courseAdd),
    takeEvery("GET_COURSES", fetchCourses),
    takeEvery("DELETE_COURSE", removeCourse)
  ]);
}

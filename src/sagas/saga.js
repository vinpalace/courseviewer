import { delay } from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";

function* courseAdd() {
  yield put({ type: "ADD_COURSE_SAGA", payload: 1 });
}

export function* watchCourseAdd() {
  yield takeEvery("COURSE_ADD", courseAdd);
}

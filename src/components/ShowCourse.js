import React from "react";
import { Link } from "react-router-dom";
import ShowAuthor from "./ShowAuthor";
<<<<<<< HEAD
import { removeCourse } from "../actions/courseActions";
import { connect } from "react-redux";
=======
>>>>>>> Saving

const ShowCourse = props => {
  const course = props.course;
  return (
    <tr key={course.id}>
      <td>
        <button className="btn btn-secondary">Watch</button>
      </td>
      <td>
        <Link to="#">{course.title}</Link>
      </td>
      <td>
        <ShowAuthor authorId={course.authorId} authors={props.authors} />
      </td>
      <td>{course.category}</td>
<<<<<<< HEAD
      <td>
        <button
          onClick={() => {
            props.removeCourse(course.id);
          }}
          className="btn btn-danger btn-white-background"
        >
          Delete
        </button>
      </td>
=======
>>>>>>> Saving
    </tr>
  );
};

<<<<<<< HEAD
const mapDispatchToProps = dispatch => {
  return {
    removeCourse: courseId => {
      dispatch(removeCourse(courseId));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ShowCourse);
=======
export default ShowCourse;
>>>>>>> Saving

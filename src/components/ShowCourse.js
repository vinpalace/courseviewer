import React from "react";
import { Link } from "react-router-dom";
import ShowAuthor from "./ShowAuthor";

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
    </tr>
  );
};

export default ShowCourse;

import React from "react";
import { Link } from "react-router-dom";
import ShowCourse from "./ShowCourse";
import ShowAuthor from "./ShowAuthor";

const ShowCourses = props => {
  const { courses } = props;
  console.log("frm showcourses", courses);
  return (
    <div className="courselist">
      <Link to="/course" className="btn btn-lg btn-primary">
        Add Course
      </Link>
      <table className="table mt-2">
        <thead>
          <tr>
            <th />
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Category</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => {
            return <ShowCourse course={course} authors={props.authors} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ShowCourses;

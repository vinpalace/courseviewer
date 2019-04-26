import React from "react";
import { Link } from "react-router-dom";
import ShowCourse from "./ShowCourse";
import ShowAuthor from "./ShowAuthor";

const ShowCourses = props => {
  const { courses } = props;
<<<<<<< HEAD
=======
  console.log("frm showcourses", courses);
>>>>>>> Saving
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
<<<<<<< HEAD
            <th scope="col" />
=======
>>>>>>> Saving
          </tr>
        </thead>
        <tbody>
          {courses.map(course => {
<<<<<<< HEAD
            return (
              <ShowCourse
                key={course.id}
                course={course}
                authors={props.authors}
              />
            );
=======
            return <ShowCourse course={course} authors={props.authors} />;
>>>>>>> Saving
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ShowCourses;

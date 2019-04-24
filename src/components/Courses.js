import React, { Component } from "react";
// import AddCourse from "./AddCourses";
import ShowCourses from "./ShowCourses";
import { connect } from "react-redux";
import { fetchCourses } from "../actions/courseActions";
import { fetchAuthors } from "../actions/authorActions";

class Courses extends Component {
  // state = {
  //   courses: [{ name: "python", id: 1 }, { name: "c++", id: 2 }]
  // };

  // addCourse = course => {
  //   if (course.name === "") {
  //     return;
  //   }
  //   course.id = Math.random();
  //   let courses = [...this.state.courses, course];
  //   this.setState({ courses: courses });
  // };

  componentDidMount() {
    console.log("Component mounted and getting courses");
    this.props.fetchCourses();
    this.props.fetchAuthors();
  }

  render() {
    return (
      <div className="course-list container">
        <h1>Courses</h1>
        <ShowCourses
          courses={this.props.courses}
          fetchCourses={this.props.fetchCourses}
          authors={this.props.authors}
        />
        {/* <AddCourse addCourse={this.props.addCourse} /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    courses: state.courses,
    authors: state.authors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // addCourse: course => {
    //   dispatch(addCourse(course));
    // },
    fetchCourses: () => {
      dispatch(fetchCourses());
    },
    fetchAuthors: () => {
      dispatch(fetchAuthors());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Courses);

import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {
    courses: []
  };
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">
          <b>PluralSight Administration</b>
        </h1>
        <p className="lead">
          React, Redux and React Router for ultra responsive web apps{" "}
        </p>
        <p className="lead">
          <Link className="btn btn-primary btn-lg" to="/about" role="button">
            Learn more
          </Link>
        </p>
      </div>
    );
  }
}

export default Home;

import React, { Component } from "react";

class AddCourse extends Component {
  state = {
    name: ""
  };

  handleChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addCourse(this.state);
    this.setState({
      name: ""
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddCourse;

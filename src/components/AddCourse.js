import React, { Component } from "react";
import { connect } from "react-redux";
import { addCourse } from "../actions/courseActions";

class AddCourse extends Component {
  state = {
    authorId: 1,
    title: "",
    category: "",
    author: this.getInitialState()
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value // 17 video 7:00
    });

    if (e.target.id === "authorId") {
      var authorName = this.getAuthorFromId(e.target.value, this.props.authors);
      this.setState({
        author: authorName,
        authorId: Number(e.target.value)
      });
    }
  };

  getAuthorFromId = (authorId, authors) => {
    if (authors.length === 0) {
      return "fetching..";
    }
    var authorId = Number(authorId);
    var authors = authors;
    var author = authors.find(function(authorObj) {
      return authorObj.id === authorId;
    });
    try {
      return author.name;
    } catch (TypeError) {
      return "not found";
    }
  };

  getIdFromAuthorName = (authorName, authors) => {
    var author = authors.find(function(authorObj) {
      return authorObj.name === authorName;
    });
    return author.id;
  };

  myfunc() {
    this.props.addCourse(this.state);
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.author === "Select Author") {
      alert("Please select Author");
      return;
    }
    var authorId = this.getIdFromAuthorName(
      this.state.author,
      this.props.authors
    );
    this.setState(
      {
        authorId: authorId
      },
      this.myfunc()
    );
    // this.setState({
    //   title: "",
    //   category: "",
    //   author: this.getInitialState()
    // });
    this.props.history.push("/courses");
  };

  getInitialState() {
    return "Select Author";
  }

  render() {
    return (
      <div>
        <h2>Add Course</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              onChange={this.handleChange}
              value={this.state.title}
            />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <select
              className="form-control"
              id="authorId"
              onChange={this.handleChange}
            >
              <option>Select Author</option>
              {this.props.authors.map(author => {
                return (
                  <option value={author.id} key={author.id}>
                    {author.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              className="form-control"
              id="category"
              onChange={this.handleChange}
              value={this.state.category}
            />
          </div>
          <button className="btn btn-primary">Save</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authors: state.authors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addCourse: course => {
      dispatch(addCourse(course));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCourse);

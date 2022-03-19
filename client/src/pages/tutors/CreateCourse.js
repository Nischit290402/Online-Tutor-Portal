import React, { Component } from "react";
import axios from "axios";

class CreateCourse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/tutors/create-course", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };
  render() {
    const { name, description } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Course Name: </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <label>Course Description: </label>
            <input
              type="text"
              name="description"
              value={description}
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateCourse;

import React, { Component } from "react";
import axios from "axios";

class CreateCourse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      title: "",
      image: "",
      gmeet: "",
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
    const { name, description, title, image, gmeet} = this.state;
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
            <label>Course Code: </label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <label>Image URL: </label>
            <input
              type="text"
              name="image"
              value={image}
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <label>Google Meet Link: </label>
            <input
              type="text"
              name="gmeet"
              value={gmeet}
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

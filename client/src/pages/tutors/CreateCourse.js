import React, { Component } from "react";
import axios from "axios";
import "./cc.css";
import Button from "react-bootstrap/Button";
let url = window.location.pathname;
const user = JSON.parse(localStorage.getItem("profile"));

if (user && user?.result) {
  url = url + "/" + user.result.email;
} else {
  url = url + "/" + "invalidEmail";
}

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
  handleSubmit = async(e) => {
    e.preventDefault();
    await axios
    .post(`${url}`, this.state)
    .then((response) => {
      console.log(response);
      alert("Course created successfully");
    })
    .catch((err) => {console.log(err);alert("Failed to create Course")});
  };
  render() {
    const { name, description, title, image, gmeet } = this.state;
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form-body">
            <div>
              <label className="form__label">Course Name: </label>
              <input
                className="form__input"
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
              ></input>
            </div>
            <div>
              <label className="form__label">Course Description: </label>
              <input
                className="form__input"
                type="text"
                name="description"
                value={description}
                onChange={this.handleChange}
              ></input>
            </div>
            <div>
              <label className="form__label">Course Code: </label>
              <input
                className="form__input"
                type="text"
                name="title"
                value={title}
                onChange={this.handleChange}
              ></input>
            </div>
            <div>
              <label className="form__label">Image URL: </label>
              <input
                className="form__input"
                type="text"
                name="image"
                value={image}
                onChange={this.handleChange}
              ></input>
            </div>
            <div>
              <label className="form__label">Google Meet Link: </label>
              <input
                className="form__input"
                type="text"
                name="gmeet"
                value={gmeet}
                onChange={this.handleChange}
              ></input>
            </div>
            <div>
              <Button type="submit" variant="primary">Submit</Button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateCourse;

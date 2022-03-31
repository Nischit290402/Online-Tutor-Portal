import React, { Component } from "react";
import axios from "axios";

const user = JSON.parse(localStorage.getItem("profile"));
console.log(user);
class CreateUserAndTutor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: user.result.name,
      email: user.result.email,
      role: "tutor",
      qualification: "",
      experience: "",
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
      .post("/users/createTutor", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };
  render() {
    const { name, email, qualification, experience } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name: {name}</label>
          </div>
          <div>
            <label>Email: {email}</label>
          </div>
          <div>
            <label>Qualification: </label>
            <input
              type="text"
              name="qualification"
              value={qualification}
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <label>Experience: </label>
            <input
              type="text"
              name="experience"
              value={experience}
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

export default CreateUserAndTutor;

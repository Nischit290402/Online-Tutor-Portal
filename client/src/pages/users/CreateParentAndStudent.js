import React, { Component } from "react";
import axios from "axios";

const user = JSON.parse(localStorage.getItem("profile"));
console.log(user);
class CreateParentAndStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: user.result.name,
      email: user.result.email,
      role: "parent",
      student_email: "",
      student_name: "",
      year_of_study: "",
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
      .post("/users/createParent", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };
  render() {
    const { name, email, student_email, student_name, year_of_study } =
      this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Parent Name: {name}</label>
          </div>
          <div>
            <label>Parent Email: {email}</label>
          </div>
          <div>
            <label>Student Name: </label>
            <input
              type="text"
              name="student_name"
              value={student_name}
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <label>Student email: </label>
            <input
              type="text"
              name="student_email"
              value={student_email}
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <label>year_of_study: </label>
            <input
              type="number"
              name="year_of_study"
              value={year_of_study}
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

export default CreateParentAndStudent;

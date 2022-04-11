import React, { Component } from "react";
import axios from "axios";
import "./cpas.css";

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
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form-body">
            <div>
              <label className="form__label">Parent Name: {name}</label>
            </div>
            <div>
              <label className="form__label">Parent Email: {email}</label>
            </div>
            <div>
              <label className="form__label">Student Name: </label>
              <input
                className="form__input"
                type="text"
                name="student_name"
                value={student_name}
                onChange={this.handleChange}
              ></input>
            </div>
            <div>
              <label className="form__label">Student email: </label>
              <input
                className="form__input"
                type="text"
                name="student_email"
                value={student_email}
                onChange={this.handleChange}
              ></input>
            </div>
            <div>
              <label className="form__label">Year of study: </label>
              <input
                className="form__input"
                type="number"
                name="year_of_study"
                value={year_of_study}
                onChange={this.handleChange}
              ></input>
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateParentAndStudent;

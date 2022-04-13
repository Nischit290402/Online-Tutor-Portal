import React, { Component } from "react";
import axios from "axios";

let url = window.location.pathname;
// console.log(url);

class EnrollCourse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      enrolled: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: "enrolled",
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(url);
    axios
      .post(`${url}`, this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <>
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <button onChange={this.handleChange} type="submit">
              Enroll
            </button>
          </div>
        </form>
      </div>
      </>
    );
  }
}

export default EnrollCourse;

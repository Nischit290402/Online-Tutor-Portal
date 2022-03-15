import React, { Component } from "react";
import axios from "axios";

let url = window.location.pathname;
console.log(url);

class GetTutorCourse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      course: "",
    };
  }

  componentDidMount() {
    axios
      .get(`${url}`)
      .then((response) => {
        this.setState({ course: response.data });
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { course } = this.state;
    if (this.state.course !== "") {
      return (
        <div>
          <h1>Particular course: </h1>
          <div>
            <center>
              <div> {course.name} </div>
              <div> {course.description} </div>
              <div> {course.tutor_email} </div>
            </center>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h1> Invalid ID: No course found</h1>
        </div>
      );
    }
  }
}

export default GetTutorCourse;

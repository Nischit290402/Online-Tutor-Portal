import React, { Component } from "react";
import axios from "axios";

let url = window.location.pathname;
console.log(url);

class GetAllParentCourses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: [],
    };
  }

  componentDidMount() {
    axios.get("/parents").then((response) => {
      this.setState({ courses: response.data });
      console.log(response.data);
    });
  }

  render() {
    const { courses } = this.state;
    let refs = [];
    courses.map((course) => {
      refs.push("parents/" + course._id);
    });
    return (
      <div>
        <h1>All Courses:</h1>
        {courses.map((course, i) => (
          <div>
            <center>
              <div> {course.name} </div>
              <div> {course.description} </div>
              <div> {course.tutor_email} </div>
              <div>
                <a href={refs[i]}>More Details</a>
              </div>
              <hr />
            </center>
          </div>
        ))}
      </div>
    );
  }
}

export default GetAllParentCourses;

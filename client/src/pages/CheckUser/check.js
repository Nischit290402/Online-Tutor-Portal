import { useState } from "react";
import React, { Component } from "react";
import axios from "axios";

const CheckUser = () => {
  const user = useState(JSON.parse(localStorage.getItem("profile")));
  //   console.log(user);

  if (user) {
    // console.log(user.length);
    console.log(user[0]);
    if (user[0]?.result) {
      console.log("Logged in");
      console.log(user[0].result.email);
    } else {
      console.log("Logged out");
      //Redirect to landing page
    }
  } else {
    console.log("logged out");
    //Redirect to landing page
  }
  return <></>;
};

let url = window.location.pathname;
// console.log(url);

class GetTutorCourse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      course: "",
    };
  }

  async componentDidMount() {
    await axios
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

export default CheckUser;

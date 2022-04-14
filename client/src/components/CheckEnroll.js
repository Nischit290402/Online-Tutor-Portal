import React, { Component } from "react";
import axios from "axios";

let url = window.location.pathname;
// console.log(cid);
// console.log(url);
url = "/parents"
const user = JSON.parse(localStorage.getItem("profile"));
console.log(url);
if (user && user?.result) {
  url = url + "/all/" + user.result.email;
} else {
  url = url + "/all/" + "invalidEmail";
}
console.log(url);

//checks whether the course is enrolled or not
class CheckEnroll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEnrolled: "",
    };
  }

  async componentDidMount() {
    await axios
      .get(`${url}`+this.props.sendID)
      .then((response) => {
        this.setState({ isEnrolled: response.data });
        console.log(response.data);
        console.log(isEnrolled);
      })
      .catch((err) => console.log(err));
  }

  render() {
    return <div>HI{this.state.isEnrolled}</div>;
  }
}

export default CheckEnroll;

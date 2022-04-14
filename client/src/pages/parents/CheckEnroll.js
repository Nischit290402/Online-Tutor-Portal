import React, { Component } from "react";
import axios from "axios";

let url = window.location.pathname;
let cid = url.slice(22);


class CheckEnroll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEnrolled: "",
    };
  }

  async componentDidMount() {
    await axios
      .get(`${cid}`)
      .then((response) => {
        this.setState({ isEnrolled: response.data });
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }

  render() {
    return <div>{this.state.isEnrolled}</div>;
  }
}

export default CheckEnroll;

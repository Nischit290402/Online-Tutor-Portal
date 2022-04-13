import React, { Component } from "react";
import axios from "axios";

let url = window.location.pathname;
// console.log(cid);
// console.log(url);

class CheckEnroll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEnrolled: "",
    };
  }

  componentDidMount() {
      console.log(this.props.sendID)
    axios
      .get("/parents/"+this.props.sendID)
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

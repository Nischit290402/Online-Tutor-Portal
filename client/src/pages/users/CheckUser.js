import React, { Component } from "react";
import { Navigate } from "react-router-dom";

import axios from "axios";

let url = window.location.pathname;
const user = JSON.parse(localStorage.getItem("profile"));
// console.log(user);
if (user && user?.result) {
  url = url + "/" + user.result.email;
} else {
  url = url + "/" + "invalidEmail";
}
// console.log(url);

// const navigate = () => {
//   const navigation = useNavigate();
//   navigation("/");
// };
class CheckUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userDetails: "",
    };
  }

  componentDidMount() {
    axios
      .get(`${url}`)
      .then((response) => {
        this.setState({ userDetails: response.data });
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { userDetails } = this.state;
    if (user && user?.result) {
      //user logged in
      if (userDetails !== "" && userDetails?.role) {
        //User already Registered
        if (userDetails.role === "student") {
          return <Navigate to="/students" />;
        } else if (userDetails.role === "parent") {
          return <Navigate to="/parents" />;
        } else if (userDetails.role === "tutor") {
          return <Navigate to="/tutor" />;
        } else {
          return <Navigate to="/" />;
        }
      } else {
        // Register New User
        return (
          <>
            Are you <br />
            <a href="/users/createParent">Parent</a> <br /> or <br />
            <a href="/users/createTutor">Tutor</a>
          </>
        );
      }
    } else {
      return <Navigate to="/" />;
    }
  }
}

export default CheckUser;

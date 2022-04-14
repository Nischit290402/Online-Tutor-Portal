import React, { Component } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";

let url = window.location.pathname;
url = "/parents"
const user = JSON.parse(localStorage.getItem("profile"));
var z = "imvalidemail"
if (user && user?.result) {
  z = user.result.email;
}
//see all enrolled courses
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
  handleSubmit = async(e) => {
    e.preventDefault();
    await axios
      .post(`${url}/`+this.props.sendID+"/"+z, this.state)
      .then((response) => {
        console.log(response);
        alert("Enrolled Successfully!!!")
      })
      .catch((err) => console.log(err));
    
  };

  render() {
    return (
      <>
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <Button onChange={this.handleChange} type="submit" variant="primary">Enroll</Button>
          </div>
        </form>
      </div>
      </>
    );
  }
}

export default EnrollCourse;

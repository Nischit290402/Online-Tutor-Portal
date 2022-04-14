import React, { Component } from "react";
import axios from "axios";

let url = window.location.pathname;
url = "/parents"
const user = JSON.parse(localStorage.getItem("profile"));
var z = "imvalidemail"
if (user && user?.result) {
  z = user.result.email;
}
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
    axios
      .post(`${url}/`+this.props.sendID+"/"+z, this.state)
      .then((response) => {
        console.log(response);
        alert("Enrolled Successfully!!!")
      })
      .catch((err) => console.log(err));
    
  };

//   axios.get("/check-enroll/"+this.props.sendID)
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

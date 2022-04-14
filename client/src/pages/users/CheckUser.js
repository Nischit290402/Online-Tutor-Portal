import React, { Component } from "react";
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom";
import "./cpas.css"
class CheckUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userDetails: "",
    };
  }

  render() {
        return (
          <>
          <div className="form">
            <h3>Are you
            <Button id="lol" variant="warning"><Link to="/users/createparent">Parent</Link></Button> or <Button id="lol" variant="warning" ><Link to="/users/createtutor">Tutor</Link></Button>
            </h3>
            <br />
            <h4>
            Please note that if you are a student, only your parent can register you as a student.
            </h4>
            </div>
          </>
        );
  }
}

export default CheckUser;

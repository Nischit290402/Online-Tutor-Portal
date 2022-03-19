import React, { Component } from "react";
import axios from "axios";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userID: "",
      title: "",
      body: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/world/", this.state).then((response) => {
      console.log(response);
    });
  };
  render() {
    const { userID, title, body } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>User ID</label>
            <input
              type="text"
              name="userID"
              value={userID}
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <label>body</label>
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default PostForm;

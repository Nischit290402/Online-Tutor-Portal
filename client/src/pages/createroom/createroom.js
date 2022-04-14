import React, { Component } from "react";
import axios from "axios";
import "./createroom.css";
import Button from "react-bootstrap/Button";

class CreateRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
        currentuser_id:"",
        user_id: "",
        room_name: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    const l=[];
			await axios.get(`http://localhost:5000/users/${this.state.currentuser_id}`)
			.then((res)=>{
				l.push(res.data._id);
			})
			.catch(error=>console.error(error));
      await axios.get(`http://localhost:5000/users/${this.state.user_id}`)
			.then((res)=>{
				l.push(res.data._id);
			})
			.catch(error=>console.error(error));
    const req={name:this.state.room_name,userIds:l,type:"consumer-to-support"};
    await axios.post(`http://localhost:5000/room/initiate`, req)
      .then((response) => {
        console.log(response);
        alert("Successfully Created Room");
      })
      .catch((err) => {console.log(err);alert("Failed to create Room")});
  };
  render() {
    const { room_name,user_id,currentuser_id } =
      this.state;
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form-body">
            <div>
              <label className="form__label">Room Name: </label>
              <input
                className="form__input"
                type="text"
                name="room_name"
                value={room_name}
                onChange={this.handleChange}
              ></input>
            </div>
            <div>
              <label className="form__label">Your Friend's/Tutor's Email: </label>
              <input
                className="form__input"
                type="text"
                name="user_id"
                value={user_id}
                onChange={this.handleChange}
              ></input>
            </div>
            <div>
              <label className="form__label">Your Email id: </label>
              <input
                className="form__input"
                type="text"
                name="currentuser_id"
                value={currentuser_id}
                onChange={this.handleChange}
              ></input>
            </div>
            <div>
            <Button type="submit" variant="primary">Submit</Button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateRoom;
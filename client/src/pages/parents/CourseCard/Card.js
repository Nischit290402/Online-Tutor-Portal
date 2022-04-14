import React, { Component } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom';
import "./Box.css";

let url = window.location.pathname;
const user = JSON.parse(localStorage.getItem("profile"));

if (user && user?.result) {
  url = url + "/all/" + user.result.email;
} else {
  url = url + "/all/" + "invalidEmail";
}

const renderCard = (card, index) => {
  return (
    <Card xs={{ maxWidth: 345 }} key={index} className="box">
      <img src={card.image} alt="image" height="150" />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {card.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {card.text}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <a href={card.more_url}>
          <Button size="small">Learn More</Button>
        </a> */}
        <Button size="small">
            <Link to={card.more_url}  >Learn More</Link>
        </Button>
      </CardActions>
    </Card>
  );
};

class BasicParentCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: [],
    };
  }

  async componentDidMount() {
    await axios.get(`${url}`).then((response) => {
      this.setState({ courses: response.data });
      console.log(response.data);
    });
  }

  render() {
    const { courses } = this.state;
    var CardInfo = [];
    for (let i = 0; i < courses.length; i++) {
      let x = {};
      x.image =
        "https://www.computerhope.com/jargon/s/software-engineering.jpg";
      x.title = courses[i].name;
      x.text = courses[i].description;
      x.more_url = courses[i]._id;
      CardInfo.push(x);
    }
    return (
      <>
        <div className="grid">{CardInfo.map(renderCard)}</div>
      </>
    );
  }
}

export default BasicParentCard;

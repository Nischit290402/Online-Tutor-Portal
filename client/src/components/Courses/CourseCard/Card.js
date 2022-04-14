import React, { Component } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Box.css";

//create a course card
const renderCard = (card, index) => {
  return (
    <Card xs={{ maxWidth: 345 }} key={index} className="box">
      <img src={card.image} alt="CS208" height="150" />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {card.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {card.text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">BUY</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

class BasicCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: [],
    };
  }

  async componentDidMount() {
    await axios.get("/parents").then((response) => {
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
      CardInfo.push(x);
    }
    return (
      <>
        <div className="grid">{CardInfo.map(renderCard)}</div>
      </>
    );
  }
}

export default BasicCard;

import axios from "axios";
import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Carousel from 'react-elastic-carousel';
import "./Card.css";
import { Link } from 'react-router-dom';

let url = window.location.pathname;
const user = JSON.parse(localStorage.getItem("profile"));
if (user && user?.result) {
  url = url + "s/all/" + user.result.email;
} else {
  url = url + "s/all/" + "invalidEmail";
}
const breakPoints = [
  {width:296,itemsToShow:1,itemsToScroll:1},
  {width:600,itemsToShow:2,itemsToScroll:2},
  {width:908,itemsToShow:3,itemsToScroll:3},
  {width:1200,itemsToShow:4,itemsToScroll:4},
  {width:1500,itemsToShow:5,itemsToScroll:5},

];

const renderCard = (CardInfo) => {
  return (
    
    <Card xs={{ maxWidth: 345 }} key={CardInfo._id} className="box" >
      <img src={CardInfo.image} alt={CardInfo.title} height="150" width="256"/>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {CardInfo.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {CardInfo.course}
        </Typography>
        <hr/>
        <Button href={CardInfo.gmeet} style={{backgroundColor:'black', color:"white", }}>Gmeet LINK</Button><br/><br/>
        <Button href={CardInfo.driveurl} style={{backgroundColor:'black', color:"white", }}>Drive LINK</Button>
      </CardContent>
      <CardActions>
        {/* <Button 
          size="small" 
          >
            <Link to={'/courseinfo/'+ CardInfo._id} state={{id: CardInfo._id, desc: CardInfo.desc, course: CardInfo.course, title: CardInfo.title, image: CardInfo.image}} >Learn More</Link>
        </Button> */}
        
      </CardActions>
    </Card>
  );
};

class CourseCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: [],
      encourses: []
    };
  }

  async componentDidMount() {
    await axios
    .get(`${url}`)
    .then((response) => {
      this.setState({ courses: response.data });
    });
  }

  render() {
    const { courses: courses } = this.state;
    var CardInfo = [];
    for (let i = 0; i < courses.length; i++) {
        let x = {};
          if(courses[i].tutor_email===user.result.email){
            x._id = courses[i]._id;
            x.image = courses[i].image;
            x.title = courses[i].title;
            x.course = courses[i].name;
            x.desc = courses[i].description;
            x.gmeet = courses[i].gmeet;
            x.driveurl = "https://drive.google.com/drive/folders/"+courses[i].driveURL;
            CardInfo.push(x);
          }
      
    }
    return (
        <>
        <div className="grid">
          <Carousel breakPoints={breakPoints}>
            {CardInfo.map(renderCard)}
          </Carousel>
        </div>
        </>
    );
  }
}

export default CourseCard;
    

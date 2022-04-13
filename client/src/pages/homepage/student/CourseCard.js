import axios from "axios";
import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Carousel from 'react-elastic-carousel';
import "./Card.css";
// import Data from '../../data/Data';
import { Link } from 'react-router-dom';

// import CourseInfo from "../../pages/courseinfo/CourseInfo";
const user = JSON.parse(localStorage.getItem("profile"));

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
        <Button href={CardInfo.gmeet} style={{backgroundColor:'black', color:"white", }}>LINK</Button>
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

  componentDidMount() {
    axios
    .get("/parents")
    .then((response) => {
      this.setState({ courses: response.data });
      // console.log(response.data);
    });
    axios
    .get("/students")
    .then((response) => {
      this.setState({ encourses: response.data });
      // console.log(response.data);
    });
  }

  render() {
    const { courses: courses, encourses: encourses } = this.state;
    console.log(courses);
    console.log(encourses);
    var CardInfo = [];
    for (let i = 0; i < encourses.length; i++) {
      for(let j = 0; j < courses.length; j++){
        let x = {};
          if(encourses[i].course_ID===courses[j]._id){
            x._id = courses[j]._id;
            x.image = courses[j].image;
            x.title = courses[j].title;
            x.course = courses[j].name;
            x.desc = courses[j].description;
            x.gmeet = courses[j].gmeet;
            CardInfo.push(x);
          }
      }
    }
    console.log(CardInfo);
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
    

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

const breakPoints = [
  {width:296,itemsToShow:1,itemsToScroll:1},
  {width:600,itemsToShow:2,itemsToScroll:2},
  {width:908,itemsToShow:3,itemsToScroll:3},
  {width:1200,itemsToShow:4,itemsToScroll:4},
  {width:1500,itemsToShow:5,itemsToScroll:5},

];

const renderCard = (TutorInfo) => {
  return (
    
    <Card xs={{ maxWidth: 345 }} key={TutorInfo._id} className="box" >
      <img src={TutorInfo.imageURL} alt={TutorInfo.name} height="150" width="256"/>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {TutorInfo.name}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          {TutorInfo.course}
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button size="small">
            <Link to={'/tutorinformation/'+ TutorInfo._id} state={{qual: TutorInfo.qual, exp: TutorInfo.exp, name: TutorInfo.name, email: TutorInfo.email, image: TutorInfo.imageURL}} >Learn More</Link>
        </Button>
        
      </CardActions>
    </Card>
  );
};

class CourseCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tutors: [],
    };
  }

  async componentDidMount() {
    await axios.get("/tutors-info").then((response) => {
      this.setState({ tutors: response.data });
    });
  }

  render() {
    const { tutors } = this.state;
    var TutorInfo = [];
    for (let i = 0; i < tutors.length; i++) {
      let x = {};
      x._id = tutors[i]._id;
      x.email = tutors[i].email;
      x.name = tutors[i].name;
      x.qual = tutors[i].qualification;
      x.exp = tutors[i].experience;
      x.imageURL = tutors[i].imageURL;
      TutorInfo.push(x);
    }
    
    return (
        <>
        <div className="grid">
          <Carousel breakPoints={breakPoints}>
            {TutorInfo.map(renderCard)}
          </Carousel>
        </div>
        </>
    );
  }
}

export default CourseCard;
    

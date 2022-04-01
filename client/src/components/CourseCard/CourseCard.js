import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Carousel from 'react-elastic-carousel';
import "./Card.css";
import Data from '../../data/Data';
import { Link } from 'react-router-dom';

// import CourseInfo from "../../pages/courseinfo/CourseInfo";

const breakPoints = [
  {width:296,itemsToShow:1,itemsToScroll:1},
  {width:600,itemsToShow:2,itemsToScroll:2},
  {width:908,itemsToShow:3,itemsToScroll:3},
  {width:1200,itemsToShow:4,itemsToScroll:4},
  {width:1500,itemsToShow:5,itemsToScroll:5},

];

function CourseCard  ()  {
    const [CardInfo, setCardInfo] = useState([])

    useEffect(() => {
        setCardInfo(Data().CardInfo)
    },[])
    
    
    const renderCard = (CardInfo, index) => {
        return (
          
          <Card xs={{ maxWidth: 345 }} key={index} className="box" >
            <img src={CardInfo.image} alt={CardInfo.title} height="150" width="256"/>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {CardInfo.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {CardInfo.course}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">BUY</Button>
              <Button 
                size="small" 
                >
                  <Link to={'/courseinfo/'+ CardInfo.index} state={{desc: CardInfo.desc, course: CardInfo.course, title: CardInfo.title, img: CardInfo.image}} >Learn More</Link>
              </Button>
              
            </CardActions>
          </Card>
        );
    };
    
    return (
        <>
      
      <div className="grid">
        <Carousel breakPoints={breakPoints}>
          {CardInfo.map(renderCard)}
        </Carousel>
      </div>
        </>
    );
};

export default CourseCard;
    
    
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Carousel from 'react-elastic-carousel';
import "./Card.css";

export const CardInfo=[
    {image:"https://www.computerhope.com/jargon/s/software-engineering.jpg", title:"CS208", text:"SE"},
    {image:"https://miro.medium.com/max/1024/1*9QRFQdpO2f59GsN2KsE9XA.png", title:"CS204", text:"DAA"},
    {image:"https://hardwarebee.com/wp-content/uploads/2020/04/logic-design-feature.png", title:"CS206", text:"LD"},
    {image:"https://miro.medium.com/max/400/0*zeeThlxTBBJmUpOP.png", title:"CS202", text:"AUTOMATA"},
    {image:"https://www.computerhope.com/jargon/s/software-engineering.jpg", title:"CS208", text:"SE"},
    {image:"https://miro.medium.com/max/1024/1*9QRFQdpO2f59GsN2KsE9XA.png", title:"CS204", text:"DAA"},
    {image:"https://hardwarebee.com/wp-content/uploads/2020/04/logic-design-feature.png", title:"CS206", text:"LD"},
    {image:"https://miro.medium.com/max/400/0*zeeThlxTBBJmUpOP.png", title:"CS202", text:"AUTOMATA"},
    {image:"https://www.computerhope.com/jargon/s/software-engineering.jpg", title:"CS208", text:"SE"},
    {image:"https://miro.medium.com/max/1024/1*9QRFQdpO2f59GsN2KsE9XA.png", title:"CS204", text:"DAA"},
    {image:"https://hardwarebee.com/wp-content/uploads/2020/04/logic-design-feature.png", title:"CS206", text:"LD"},
    {image:"https://miro.medium.com/max/400/0*zeeThlxTBBJmUpOP.png", title:"CS202", text:"AUTOMATA"},
    {image:"https://www.computerhope.com/jargon/s/software-engineering.jpg", title:"CS208", text:"SE"},
    {image:"https://miro.medium.com/max/1024/1*9QRFQdpO2f59GsN2KsE9XA.png", title:"CS204", text:"DAA"},
    {image:"https://hardwarebee.com/wp-content/uploads/2020/04/logic-design-feature.png", title:"CS206", text:"LD"},
    {image:"https://miro.medium.com/max/400/0*zeeThlxTBBJmUpOP.png", title:"CS202", text:"AUTOMATA"}
];

const breakPoints = [
  {width:296,itemsToShow:1,itemsToScroll:1},
  {width:600,itemsToShow:2,itemsToScroll:2},
  {width:908,itemsToShow:3,itemsToScroll:3},
  {width:1200,itemsToShow:4,itemsToScroll:4},
  {width:1500,itemsToShow:5,itemsToScroll:5},

];

const CourseCard = () => {

    const renderCard = (card, index) => {
        return (
          <Card xs={{ maxWidth: 345 }} key={index} className="box" >
            <img src={card.image} alt={card.title} height="150" width="256"/>
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
              <Button size="small" href="/CourseInfo">Learn More</Button>
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
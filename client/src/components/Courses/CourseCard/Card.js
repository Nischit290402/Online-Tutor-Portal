import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Box.css";

const CardInfo=[
  {image:"https://www.computerhope.com/jargon/s/software-engineering.jpg", title:"CS208", text:"SE"},
  {image:"https://miro.medium.com/max/1024/1*9QRFQdpO2f59GsN2KsE9XA.png", title:"CS204", text:"DAA"},
  {image:"https://hardwarebee.com/wp-content/uploads/2020/04/logic-design-feature.png", title:"CS206", text:"LD"},
  {image:"https://miro.medium.com/max/400/0*zeeThlxTBBJmUpOP.png", title:"CS202", text:"AUTOMATA"}
]

const BasicCard = () => {

const renderCard = (card, index) => {
  return (
    <Card xs={{ maxWidth: 345 }} key={index} className="box" >
      <img src={card.image} alt="CS208" height="150"/>
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
  return (
  
  <>
    <div className="grid">{CardInfo.map(renderCard)}</div>
  </>
  );};
export default BasicCard;

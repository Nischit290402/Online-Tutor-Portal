import React from "react";
import BasicCard from "./CourseCard/Card";
import { Grid } from "@mui/material";

//display all the coursecard
const GetAllParentCourses = () => {
  return (
    <>
      <h1>Courses</h1>
      <Grid
        item
        spacing={2}
        direction="row"
        justifyContent="space-between"
        alignItems="baseline"
      >
        <BasicCard />
      </Grid>
    </>
  );
};

const CourseCard = () => {
  const renderCard = (card, index) => {
    return (
      <Card xs={{ maxWidth: 345 }} key={index} className="box">
        <img src={card.image} alt={card.title} height="150" width="256" />
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
          <Button size="small" href="/CourseInfo">
            Learn More
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

export default GetAllParentCourses;

import React from "react";
import BasicTutorCard from "./CourseCard/Card";
import { Grid } from "@mui/material";

const Cards = () => {
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
        <BasicTutorCard />
      </Grid>
    </>
  );
};

export default Cards;

import React from "react";
import Card from "./../../components/CourseCard/CourseCard";
import { Grid } from "@mui/material";

const Courses=()=>{
    return(
        <>
        <h1>Course list</h1>
        <h1>Courses</h1>
        <Grid item spacing={2} direction="row" justifyContent="space-between" alignItems="baseline">
            <Card />
        </Grid>     
        </>
    )
}

export default Courses;
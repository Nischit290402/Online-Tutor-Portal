import React from "react";
import CourseCard from "./../../components/CourseCard/CourseCard";
import { Grid } from "@mui/material";

const Courses=()=>{
    return(
        <>
        <h1> Course list</h1>
        <h1>==========</h1>
        <h1>Courses</h1>
        <h1>------------</h1>
        <br/>
        <br/>
        <Grid item spacing={2} direction="row" justifyContent="space-between" alignItems="baseline">
            <CourseCard />
        </Grid>     
        </>
    )
}

export default Courses;
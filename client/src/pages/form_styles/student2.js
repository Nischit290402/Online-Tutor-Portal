import React from "react";
import CourseCard from "./coursecards1";
import { Grid } from "@mui/material";

const Courselist=()=>{
    return(
        <>
        <h1>Enrolled courses</h1>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1>Recommended Courses</h1>
        <br/>
        <Grid item spacing={2} direction="row" justifyContent="space-between" alignItems="baseline">
            <CourseCard />
        </Grid>     
        </>
    )
}

export default Courselist;
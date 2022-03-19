import React from 'react';
import BasicCard from "./CourseCard/Card";
import { Grid } from "@mui/material";

const Cards = () => {
    return(
        <>
        <h1>Courses</h1>
        <Grid item spacing={2} direction="row" justifyContent="space-between" alignItems="baseline">
            <BasicCard />
        </Grid>        
        </>
    );
}

export default Cards;
    
    
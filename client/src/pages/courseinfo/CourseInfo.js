import React from "react";
import Card from "./../../components/CourseCard/CourseCard";
import Container  from 'react-bootstrap/Container';
import { CardInfo } from "./../../components/CourseCard/CourseCard";
import { Grid } from "@mui/material";

const CourseInfo=()=>{
    return(
        <>
        <Container>
        <h1> Course Information</h1>
        <h1>==========</h1>
        <br/>
        <br/>
        Welcome to  {CardInfo.title}
        </Container>
        </>
    )
}

export default CourseInfo;
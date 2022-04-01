import React from "react";
import Container  from 'react-bootstrap/Container';
import { useLocation } from 'react-router-dom'
import "./styles.css"
import { Grid, Paper } from "@mui/material";
import CourseCard from "../../components/CourseCard/CourseCard";

const CourseInfo=()=>{
    const location = useLocation()
    const {desc} = location.state
    const {course} = location.state
    const {title} = location.state
    const {img} = location.state

    const myStyle = {
        backgroundImage: "linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url()",
        backgroundRepeat: 'no-repeat',
        width:'97.2%',
        height: '450px',
        color: 'white',
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
        // fontSize: 67,
        //position:'absolute',
    };
    return(
        <>
        <Container>
        <h1> Course Information</h1>
        <h1>==========</h1>
        <Paper variant="outlined">
        <Container>
        
        <div className="card" style={myStyle}>
        <Container>
          <div className="card-block">
            <h2>{title}</h2>
            <hr className="style"/>
            <div className="row">
              <div className="col-md-4">
                <p><img src={img} className="img-responsive" width="300" height="180" alt={course}/></p>
              </div>
              <div className="col-md-8">

                <h4>{course}</h4>
              <p>{desc}</p>
                <br/><br/><br/><br/>
                <p><button ><b>Enroll Now »</b></button></p>

              </div>
            </div>
          </div>
          </Container>
        </div>
        </Container>
        </Paper>
        </Container>
        <br/><br/>
        <div>
        <Container>
            <Paper variant="outlined">
                <Container>
                <h2>View More Courses</h2>
                <hr/>
                <Grid padding={5}>
                    <CourseCard />
                </Grid>
                </Container>
            </Paper>
        </Container>
        </div>
        </>
    )
}
export default CourseInfo;

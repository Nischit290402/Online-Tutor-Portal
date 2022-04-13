import React, { useState }from "react";
import Container  from 'react-bootstrap/Container';
import { useLocation } from 'react-router-dom'
import "./styles.css"
import { Grid, Paper } from "@mui/material";
import CourseCard from "../../components/CourseCard/CourseCard";
import EnrollCourse from "../../components/EnrollCourse";
import CheckEnroll from "../parents/CheckEnroll";
import axios from "axios";

let url = window.location.pathname;
// url = "/courses"+url.substring(0, u)
console.log(url);
const CourseInfo=()=>{
    const location = useLocation()
    const {id} = location.state;
    const {desc} = location.state
    const {course} = location.state
    const {title} = location.state
    const {image} = location.state
    const [data,setData] = useState();
    const sendID = () => {
      setData(id);
    }
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
    console.log({id});
    let isEnrolled="";
    axios.get('/students/'+id).then((response)=>{isEnrolled=response.data;console.log(typeof isEnrolled);console.log(isEnrolled)}).catch((err)=> console.log(err));
    // let condition = 
  
    return(
        <>
        <header className="site-head">
            <div className="cont">
            <div className="site-banner">
            <h1 className="site-banner-title">Course Information</h1>
            {/* <p className="site-banner-desc">Explore renowned tutors</p> */}
        </div>
            </div>
        </header><br/><br/>
        <Container>
        
        <Paper variant="outlined">
        <Container>
        
        <div className="card" style={myStyle}>
        <Container>
          <div className="card-block">
            <h2>{title}</h2>
            <hr className="style"/>
            <div className="row">
              <div className="col-md-4">
                <p><img src={image} className="img-responsive" width="300" height="180" alt={course}/></p>
              </div>
              <div className="col-md-8">

                <h4>{course}</h4>
              <p>{desc}</p>
                <br/><br/><br/><br/>
                {/* <p><a href={url}><button ><b>Enroll Now »</b></button></a></p> */}
                <a onClick={()=>sendID()}><EnrollCourse sendID={data}/></a>
                <br/>

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

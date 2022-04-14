import CourseCard from "../../components/CourseCard/CourseCard";
import { Container,Paper,Grid } from "@mui/material";
import "./styles.css"

const Courses=()=> {


    return(
        <>
        <header className="site-head">
            <div className="container">
            <div className="site-banner">
            <h1 className="site-banner-title">Courses</h1>
            <p className="site-banner-desc">Explore your interests</p>
        </div>
            </div>
        </header>
        
        <div>
        <Grid padding={6}>
            <Paper variant="outlined">
                    <CourseCard />
            </Paper>
        </Grid>   
        </div>  
        </>
    )
    
     
}

export default Courses;
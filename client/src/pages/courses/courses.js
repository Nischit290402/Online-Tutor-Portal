import CourseCard from "../../components/CourseCard/CourseCard";
import { Container,Paper,Grid } from "@mui/material";


const Courses=()=> {


    return(
        <>
        <h1> Course list</h1>
        <h1>==========</h1>
        <h1>Courses</h1>
        <h1>------------</h1>
        <br/><br/>
        <div>
        <Grid justifyContent="space-between" padding={6}>
            <Paper justifyContent="space-between" variant="outlined">
                    <CourseCard />
            </Paper>
        </Grid>   
        </div>  
        </>
    )
    
     
}

export default Courses;
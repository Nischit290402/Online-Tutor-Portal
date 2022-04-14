import TutorCard from "../../components/TutorCard/TutorCard";
import { Container,Paper,Grid } from "@mui/material";
import "./styles.css";

const Tutors=()=> {


    return(
        <>
        <header className="site-head">
            <div className="container">
            <div className="site-banner">
            <h1 className="site-banner-title">Tutors</h1>
            <p className="site-banner-desc">Explore renowned tutors</p>
        </div>
            </div>
        </header>
        <div>
            <center>
            <div className="Tdiv">
        <Grid padding={6}>
            <Paper variant="outlined">
                    <TutorCard />
            </Paper>
        </Grid>   
        </div>
        </center>
        </div>  
        </>
    )
    
     
}

export default Tutors;
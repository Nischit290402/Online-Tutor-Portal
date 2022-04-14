import { useState, useEffect } from "react";
import Title from './Title';
// import { Navigation } from "./components/navigation";
// import { Header } from "./components/header";
import { Features } from "./Features";
import { About } from "./about";
// import { Services } from "./components/services";
// import { Gallery } from "./components/gallery";
import { Testimonials } from "./test";
// import { Team } from "./components/Team";
// import { Contact } from "./components/contact";
import JsonData from "./../../data/landing.json";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import SmoothScroll from "smooth-scroll";
// import "./landing.css";

// export const scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 1000,
//   speedAsDuration: true,
// });

const Landing = () => {
  const navigation=useNavigate();
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  const user = JSON.parse(localStorage.getItem("profile"));
  if(user){
  axios.get(`http://localhost:5000/users/check/${user.result.email}`)
      .then((response) => {
        console.log(response);
        if(response.data.role){
          if (response.data.role === "student") {
            navigation('/student')
          } else if (response.data.role === "parent") {
            navigation('/parent')
          } else if (response.data.role === "tutor") {
            navigation('/tutor')
          } else {
            navigation('/');
          }
        }
      })
      .catch((err) => console.log(err));
    }
  return (
      
    <div>
      <Title />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Testimonials data={landingPageData.Testimonials} />
    </div>
  );
};

export default Landing;

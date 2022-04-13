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
// import SmoothScroll from "smooth-scroll";
// import "./landing.css";

// export const scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 1000,
//   speedAsDuration: true,
// });

const Landing = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
      
    <div>
      {/* <Navigation />
      <Header data={landingPageData.Header} /> */}
      <Title />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      {/* <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery}/> */}
      <Testimonials data={landingPageData.Testimonials} />
      {/* <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} /> */}
    </div>
  );
};

export default Landing;

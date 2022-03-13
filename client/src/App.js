import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Landing  from "./pages/landing/landing";
import Courses from "./pages/courses/courses";
import Tutorinfo from "./pages/tutorinfo/tutorinfo";

 const App = () => {
   return (
    <>
    <Router>
     <Navbar/>
     <Routes>
     <Route path='/' element={<Landing/>}/>
     <Route path='/tutorinfo' element={<Tutorinfo/>}/>
     <Route path='/courses' element={<Courses/>}/>
     </Routes>
     </Router>
     <Footer/>
    </> 
   );
 }

 export default App;
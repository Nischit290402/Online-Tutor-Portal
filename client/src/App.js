import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbarr from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Landing from "./pages/landing/landing";
import Courses from "./pages/courses/courses";
import CourseInfo from "./pages/courseinfo/CourseInfo";
import Tutorinfo from "./pages/tutorinfo/tutorinfo";


import CreateCourse from "./pages/tutors/CreateCourse";
import GetTutorCourses from "./pages/tutors/GetTutorCourses";
import GetTutorCourse from "./pages/tutors/GetTutorCourse";
import GetAllCourses from "./pages/parents/GetAllCourses";
import GetParentCourse from "./pages/parents/GetParentCourse";
import EnrollCourse from "./pages/parents/EnrollCourse";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <>
      <Router>
        <Navbarr />
        <div className="main">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/tutorinfo" element={<Tutorinfo />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courseinfo" element={<CourseInfo />} />

            <Route path="/parents" element={<GetAllCourses />} />
            <Route path="/parents/enroll-course/:id" element={<EnrollCourse />} />
            <Route path="/parents/:id" element={<GetParentCourse />} />
            <Route path="/tutors" element={<GetTutorCourses />} />
            <Route path="/tutors/create-course" element={<CreateCourse />} />
            <Route path="/tutors/:id" element={<GetTutorCourse />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default App;
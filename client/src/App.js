import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbarr from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Landing from "./pages/landing/landing";
import Courses from "./pages/courses/courses";
import CourseInfo from "./pages/courseinfo/CourseInfo";
import Tutorinfo from "./pages/tutorinfo/tutorinfo";
<<<<<<< HEAD
=======


>>>>>>> b11185e8471db7a09fa58fc99f9c55c4f42df85c
import CreateCourse from "./pages/tutors/CreateCourse";
import GetTutorCourses from "./pages/tutors/GetTutorCourses";
import GetTutorCourse from "./pages/tutors/GetTutorCourse";
import GetAllParentCourses from "./pages/parents/GetAllParentCourses";
import GetParentCourse from "./pages/parents/GetParentCourse";
import EnrollCourse from "./pages/parents/EnrollCourse";
<<<<<<< HEAD
import GetAllCourses from "./pages/all/GetAllCourses";
import CheckEnroll from "./pages/parents/CheckEnroll";
=======
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

>>>>>>> b11185e8471db7a09fa58fc99f9c55c4f42df85c
const App = () => {

  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <>
      <Router>
<<<<<<< HEAD
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/tutorinfo" element={<Tutorinfo />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/parents" element={<GetAllParentCourses />} />
          <Route path="/parents/check-enroll/:id" element={<CheckEnroll />} />
          <Route path="/parents/enroll-course/:id" element={<EnrollCourse />} />
          <Route path="/parents/:id" element={<GetParentCourse />} />
          <Route path="/tutors" element={<GetTutorCourses />} />
          <Route path="/tutors/create-course" element={<CreateCourse />} />
          <Route path="/tutors/:id" element={<GetTutorCourse />} />
          <Route path="/all/courses" element={<GetAllCourses />} />
        </Routes>
        {/* <Cards /> */}
=======
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
>>>>>>> b11185e8471db7a09fa58fc99f9c55c4f42df85c
      </Router>
    </>
  );
};

export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Landing from "./pages/landing/landing";
import Courses from "./pages/courses/courses";
import Tutorinfo from "./pages/tutorinfo/tutorinfo";
import CreateCourse from "./pages/tutors/CreateCourse";
import GetTutorCourses from "./pages/tutors/GetTutorCourses";
import GetTutorCourse from "./pages/tutors/GetTutorCourse";
import GetAllCourses from "./pages/parents/GetAllCourses";
import GetParentCourse from "./pages/parents/GetParentCourse";
import EnrollCourse from "./pages/parents/EnrollCourse";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/tutorinfo" element={<Tutorinfo />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/parents" element={<GetAllCourses />} />
          <Route path="/parents/enroll-course/:id" element={<EnrollCourse />} />
          <Route path="/parents/:id" element={<GetParentCourse />} />
          <Route path="/tutors" element={<GetTutorCourses />} />
          <Route path="/tutors/create-course" element={<CreateCourse />} />
          <Route path="/tutors/:id" element={<GetTutorCourse />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;

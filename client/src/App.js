import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbarr from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Landing from "./pages/landing/landing";
import Courses from "./pages/courses/courses";
import Student from "./pages/homepage/student";
import CourseInfo from "./pages/courseinfo/CourseInfo";
import Tutorinfo from "./pages/tutorinfo/tutorinfo";

import RegistrationForm from "./pages/registration/reg";
import RegistrationForm1 from "./pages/registration/reg2";

import CreateCourse from "./pages/tutors/CreateCourse";
import GetTutorCourses from "./pages/tutors/GetTutorCourses";
import GetTutorCourse from "./pages/tutors/GetTutorCourse";
import GetAllParentCourses from "./pages/parents/GetAllParentCourses";
import GetParentCourse from "./pages/parents/GetParentCourse";
import EnrollCourse from "./pages/parents/EnrollCourse";
import GetAllCourses from "./pages/all/GetAllCourses";
import CheckEnroll from "./pages/parents/CheckEnroll";
import CheckUser from "./pages/users/CheckUser";
import CreateUserAndTutor from "./pages/users/CreateUserAndTutor";
import CreateParentAndStudent from "./pages/users/CreateParentAndStudent";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  // console.log(user);
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
            <Route path="/parents" element={<GetAllParentCourses />} />
            <Route path="/parents/check-enroll/:id" element={<CheckEnroll />} />
            <Route path="/parents" element={<GetAllCourses />} />
            <Route
              path="/parents/enroll-course/:id"
              element={<EnrollCourse />}
            />
            <Route path="/parents/:id" element={<GetParentCourse />} />
            <Route path="/tutors" element={<GetTutorCourses />} />
            <Route path="/tutors/create-course" element={<CreateCourse />} />
            <Route path="/tutors/:id" element={<GetTutorCourse />} />
            <Route path="/all/courses" element={<GetAllCourses />} />
            <Route path="/users/check" element={<CheckUser />} />
            <Route path="/users/createTutor" element={<CreateUserAndTutor />} />
            <Route
              path="/users/createParent"
              element={<CreateParentAndStudent />}
            />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/register2" element={<RegistrationForm1 />} />
            <Route path="/student" element={<Student />} />
            <Route path="/courseinfo/:id" element={<CourseInfo />} />
            <Route
              path="/parents/enroll-course/:id"
              element={<EnrollCourse />}
            />
          </Routes>
          {/* <Cards /> */}
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbarr from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Landing from "./pages/landing/landing";
import Courses from "./pages/courses/courses";
import Tutors from "./pages/tutors/tutors";
import Student from "./pages/homepage/student/studenthome";
import Parent from "./pages/homepage/parent/parenthome";
import Tutor from "./pages/homepage/tutor/tutorhome";
import CourseInfo from "./pages/courseinfo/CourseInfo";
import Tutorinfo from "./pages/tutorinfo/TutorInformation";
import RegistrationForm from "./pages/registration/reg";
import RegistrationForm1 from "./pages/registration/reg2";
import CreateCourse from "./pages/tutors/CreateCourse";
import GetParentCourse from "./pages/parents/GetParentCourse";
import EnrollCourse from "./pages/parents/EnrollCourse";
import GetAllCourses from "./pages/all/GetAllCourses";
import CheckEnroll from "./pages/parents/CheckEnroll";
import CheckUser from "./pages/users/CheckUser";
import CreateUserAndTutor from "./pages/users/CreateUserAndTutor";
import CreateParentAndStudent from "./pages/users/CreateParentAndStudent";
import Messages from "./pages/messages/messages";
import CreateRoom from "./pages/createroom/createroom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Router>
        <Navbarr />
        <div className="main">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/tutorinformation/:id" element={<Tutorinfo />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/parents/check-enroll/:id" element={<CheckEnroll />} />
            <Route path="/parents/enroll-course/:id" element={<EnrollCourse />}/>
            <Route path="/parents/:id" element={<GetParentCourse />} />
            <Route path="/tutors" element={<Tutors />} />
            <Route path="/tutors/create-course" element={<CreateCourse />} />
            <Route path="/all/courses" element={<GetAllCourses />} />
            <Route path="/users/check" element={<CheckUser />} />
            <Route path="/users/createTutor" element={<CreateUserAndTutor />} />
            <Route path="/users/createParent" element={<CreateParentAndStudent />}/>
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/register2" element={<RegistrationForm1 />} />
            <Route path="/student" element={<Student />} />
            <Route path="/parent" element={<Parent />} />
            <Route path="/tutor" element={<Tutor />} />
            <Route path="/courseinfo/:id" element={<CourseInfo />} />
            <Route path="/parents/enroll-course/:id" element={<EnrollCourse />}/>
            <Route path="/messages/:id" element={<Messages />} />
            <Route path="/createroom" element={<CreateRoom />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default App;

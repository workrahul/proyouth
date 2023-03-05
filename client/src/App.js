import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainpage/Mainpage";
import Blogs from "./pages/Blogs/blogs";
import AboutUs from "./pages/AboutUs/aboutus";
import ContactUs from "./pages/ContactUs/contactus";
import TheApp from "./pages/TheApp/theapp";
import StudentEmail from "./components/Login/Student/StudentEmail";
import Studentotp from "./components/Login/Student/Studentotp";
import Email from "./components/Login/Employer/email";
import Otp from "./components/Login/Employer/Otp";
import StudentDetails from "./components/Login/Student/StudentDetails";
import EmployerDetails from "./components/Login/Employer/employerDetails";
import Jobs from "./pages/Jobs/Jobs";
import AddJob from "./components/Login/Employer/addjob";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/theapp" element={<TheApp />} />
        <Route path="/student/login" element={<StudentEmail />} />
        <Route path="/student/otp" element={<Studentotp />} />
        <Route path="/employer/login" element={<Email />} />
        <Route path="/employer/otp" element={<Otp />} />
        <Route path="/student/details" element={<StudentDetails />} />
        <Route path="/employer/details" element={<EmployerDetails />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/addjob" element={<AddJob />} />
      </Routes>
    </>
  );
}

export default App;

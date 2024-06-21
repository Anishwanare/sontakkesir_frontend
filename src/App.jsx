import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Student/Login";
import Registration from "./School/Registration";
import StudentRegistration from "./Student/StudentRegistration";
import Notice from "./Components/notice";

const App = () => {
  return (
    <Router>
      <Notice desc="Currently registration is working only." notice="notice" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student-login" element={<Login />} />
        <Route path="/student-register" element={<StudentRegistration />} />
        <Route path="/school-register" element={<Registration />} />
      </Routes>
      <ToastContainer position="top-center" />
    </Router>
  );
};

export default App;

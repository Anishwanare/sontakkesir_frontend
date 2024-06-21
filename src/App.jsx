import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Student/Login";
import Registration from "./School/Registration";
import StudentRegistration from "./Student/StudentRegistration";
import Notice from "./Components/notice";
import NotFound from "./Components/NotFound";

const App = () => {
  const location = useLocation();

  const showNotice = location.pathname !== "*";

  return (
    <div>
      {showNotice && (
        <Notice
          desc="Currently registration is working only."
          notice="notice"
        />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student-login" element={<Login />} />
        <Route path="/student-register" element={<StudentRegistration />} />
        <Route path="/school-register" element={<Registration />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer position="top-center" />
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;

import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Student/Login";
import Registration from "./School/Registration";
import StudentRegistration from "./Student/StudentRegistration";
import Notice from "./Components/notice";
import NotFound from "./Components/NotFound";
import AdminDashboard from "./Admin/AdminDashboard";
import CoordinatorRegistration from "./School/CoordinatorRegistration";
import AdminLogin from "./Admin/components/AdminLogin";
import AdminPrivate from "./Admin/AdminPrivate";

const App = () => {
  const isAuthenticated = localStorage.getItem("AdminToken");
  const location = useLocation();
  const navigateTo = useNavigate();

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
        <Route path="/coordinator" element={<CoordinatorRegistration />} />
        <Route element={<AdminPrivate />}>
          <Route
            path="/admin-login"
            element={
              isAuthenticated ? (
                <Navigate to="/admin-dashboard" />
              ) : (
                <Navigate to="/admin-login" />
                
              )
            }
          />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin-login" element={<AdminLogin />} />
        </Route>
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

import React, { lazy, Suspense } from "react";
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
import { HashLoader } from "react-spinners"
import Registration from "./School/Registration";
import StudentRegistration from "./Student/StudentRegistration";
import Notice from "./Components/notice";
import NotFound from "./Components/NotFound";
import AdminDashboard from "./Admin/AdminDashboard";
import CoordinatorRegistration from "./School/CoordinatorRegistration";
import AdminLogin from "./Admin/components/AdminLogin";
import AdminPrivate from "./Admin/AdminPrivate";
import Gallery from "./Components/Gallery";
import UpdateStudent from "./Admin/components/UpdateContent/UpdateStudent";
import UpdateSchool from "./Admin/components/UpdateContent/UpdateSchool";

const Home = lazy(() => import("./Pages/Home"))
const Login = lazy(() => import("./Student/Login"))

const App = () => {
  const isAuthenticated = Boolean(localStorage.getItem("AdminToken")); // Convert to a boolean
  const location = useLocation();

  // Exclude Notice from specific routes
  const excludedPaths = ["/admin-login", "/admin-dashboard"];
  const showNotice = !excludedPaths.includes(location.pathname);

  return (
    <Suspense fallback={<div className="flex justify-center items-center h-screen" color = "#1276e2"><HashLoader /></div>}>
      {/* Show notice only on certain paths */}
      {showNotice && (
        <Notice
          desc="Currently, registration is working only."
          notice="Notice"
        />
      )}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/student-login" element={<Login />} />
        <Route path="/student-register" element={<StudentRegistration />} />
        <Route path="/school-register" element={<Registration />} />
        <Route path="/coordinator" element={<CoordinatorRegistration />} />
        <Route path="/gallery" element={<Gallery />} />

        {/* Admin Login Route */}
        <Route
          path="/admin-login"
          element={
            isAuthenticated ? (
              <Navigate to="/admin-dashboard" replace />
            ) : (
              <AdminLogin />
            )
          }
        />

        {/* Protected Admin Routes */}
        <Route element={<AdminPrivate />}>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin/update-student/:id" element={<UpdateStudent />} />
          <Route path="/admin/update-school/:id" element={<UpdateSchool />} />
        </Route>

        {/* Catch-All Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ToastContainer position="top-center" />
    </Suspense>
  );
};

// Wrapper for BrowserRouter
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;

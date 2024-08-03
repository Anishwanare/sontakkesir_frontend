import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import AdminLogin from "./components/AdminLogin";

const AdminPrivate = () => {
  const isAuthenticated = localStorage.getItem("AdminToken");

  return isAuthenticated ? <Outlet /> : <Navigate to="/admin-login" />;
};

export default AdminPrivate;

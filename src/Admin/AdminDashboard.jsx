import React, { useEffect, useState } from "react";
import SchoolData from "./components/SchoolData";
import StudentData from "./components/StudentData";
import MessagesData from "./components/MessagesData";
import CoordinateData from "./components/CoordinateData";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";

const sections = [
  { name: "Schools", icon: "/school.png" },
  { name: "Students", icon: "/student.png" },
  { name: "Messages", icon: "/message.png" },
  { name: "Coordinator", icon: "/coordinator.png" },
];

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("Schools");
  const [admin, setAdmin] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleLogoutAdmin = () => {
    localStorage.removeItem("AdminToken");
    location.reload();
  };

  useEffect(() => {
    const adminToken = localStorage.getItem("AdminToken");
    if (!adminToken) {
      Navigate("/admin-login");
      return;
    }

    const fetchAdminInfo = async () => {
      try {
        const response = await axios.get(
          "http://localhost:2050/api/v5/admin/fetch",
          { withCredentials: true }
        );
        if (response?.data?.status) {
          setAdmin(response?.data.admin[0]);
        }
      } catch (error) {
        console.error("Error fetching admin info:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAdminInfo();
  }, []);

  const renderActiveSection = () => {
    switch (activeSection) {
      case "Schools":
        return <SchoolData />;
      case "Students":
        return <StudentData />;
      case "Messages":
        return <MessagesData />;
      case "Coordinator":
        return <CoordinateData />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen max-h-[100%]">
      {/* Sidebar */}
      <div className="bg-blue-600 text-white w-full lg:w-64 p-4 flex flex-col justify-between">
        {/* Logo Section */}
        <Link to="/">
          <div className="flex items-center mb-8">
            <img alt="logo" src="/logo.jpeg" className="mr-2 w-10" />
            <span className="text-lg font-semibold">Dnyaneshwar Sontakke</span>
          </div>
        </Link>

        {/* Navigation Section */}
        <nav className="flex-1 w-full mb-8">
          <ul className="space-y-4">
            {sections.map((section) => (
              <li
                key={section.name}
                className={`flex items-center space-x-2 cursor-pointer ${
                  activeSection === section.name ? "underline" : ""
                }`}
              >
                <img
                  alt={`${section.name.toLowerCase()}-icon`}
                  src={section.icon}
                  className="w-6 sm:w-8 rounded-full"
                />
                <button
                  onClick={() => setActiveSection(section.name)}
                  className="text-white font-semibold"
                >
                  {section.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-scroll">
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border-b border-zinc-200">
          {/* Search */}
          <div className="flex items-center space-x-2 w-full sm:w-auto mb-4 sm:mb-0">
            <img alt="search-icon" src="https://placehold.co/24x24" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-zinc-100 p-2 w-full sm:w-auto rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span>Welcome:</span>
              <span>{isLoading ? "Loading..." : admin?.name || "Admin"}</span>
            </div>
          </div>
          <button
            type="button"
            onClick={handleLogoutAdmin}
            className="text-red-600"
          >
            Logout
          </button>
        </header>

        <main className="flex-1 p-4">
          <div className="border-2 border-dashed border-zinc-300 rounded-lg h-full p-4">
            {isLoading ? (
              <div className="flex items-center justify-center h-full">
                <div className="loader"></div>
              </div>
            ) : (
              renderActiveSection()
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;

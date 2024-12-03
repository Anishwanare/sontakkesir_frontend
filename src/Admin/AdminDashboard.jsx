import React, { useEffect, useState } from "react";
import SchoolData from "./components/SchoolData";
import StudentData from "./components/StudentData";
import MessagesData from "./components/MessagesData";
import CoordinateData from "./components/CoordinateData";
import axios from "axios";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("Schools");
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const fetchAdminInfo = async () => {
      try {
        const response = await axios.get(
          "http://localhost:2050/api/v5/admin/fetch",
          {
            withCredentials: true,
          }
        );
        if (response?.data?.status) {
          setAdmin(response?.data.admin[0]);
        }
      } catch (error) {
        console.error("Error fetching admin info:", error);
      }
    };
    fetchAdminInfo();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Sidebar */}
      <div className="bg-blue-600 text-white w-full lg:w-64 p-4 flex flex-col justify-between">
        {/* Logo Section */}
        <Link to={"/"}>
          <div className="flex items-center mb-8">
            <img alt="logo" src="/logo.jpeg" className="mr-2 w-10" />
            <span className="text-lg font-semibold">Dnyaneshwar Sontakke</span>
          </div>
        </Link>

        {/* Navigation Section */}
        <nav className="flex-1 w-full mb-8"> {/* Added mb-8 for spacing */}
          <ul className="space-y-2 sm:space-y-4 flex md:flex-col lg:flex-col justify-between items-center md:items-start">
            {[
              { name: "Schools", icon: "/school.png" },
              { name: "Students", icon: "/student.png" },
              { name: "Messages", icon: "/message.png" },
              { name: "Coordinator", icon: "/coordinator.png" },
            ].map((section) => (
              <li
                key={section.name}
                className="flex items-center flex-col md:flex-row  md:space-x-2 justify-start"
              >
                <img
                  alt={`${section.name.toLowerCase()}-icon`}
                  src={section.icon}
                  className="mr-2 w-6 sm:w-8 rounded-full"
                />
                <button
                  onClick={() => setActiveSection(section.name)}
                  className={`text-white font-semibold ${activeSection === section.name ? "underline" : ""
                    }`}
                >
                  {section.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Settings Section */}
        <div className="mt-auto">
          <a href="#" className="flex items-center space-x-2">
            <img alt="settings-icon" src="https://placehold.co/24x24" />
            <span className="text-white">Settings</span>
          </a>
        </div>
      </div>



      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border-b border-zinc-200">
          {/* search */}
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
              <span>Welcome: </span>
              <span>{admin ? admin.name : "Loading..."}</span>
            </div>
          </div>
          <div>
            <button
              type="button"
              onClick={() => {
                localStorage.removeItem("AdminToken");
              }}
              className="text-red-600"
            >
              Logout
            </button>
          </div>
        </header>

        <main className="flex-1 p-4">
          <div className="border-2 border-dashed border-zinc-300 rounded-lg h-full p-4">
            {activeSection === "Schools" && <SchoolData />}
            {activeSection === "Students" && <StudentData />}
            {activeSection === "Messages" && <MessagesData />}
            {activeSection === "Coordinator" && <CoordinateData />}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;




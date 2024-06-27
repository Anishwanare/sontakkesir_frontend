import React, { useState } from "react";
import SchoolData from "./components/SchoolData";
import StudentData from "./components/StudentData";
import MessagesData from "./components/MessagesData";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("Schools");

  return (
    <div className="flex h-screen">
      <div className="bg-blue-600 text-white w-64 p-4 flex flex-col">
        <div className="flex items-center mb-8">
          <img alt="logo" src="/logo.jpeg" className="mr-2 w-10" />
          <span className="text-lg font-semibold">Dnyaneshwar Sontakke</span>
        </div>
        <nav className="flex-1">
          <ul className="space-y-4">
            <li className="flex items-center space-x-2">
              <img
                alt="dashboard-icon"
                src="/school.png"
                className="mr-2 w-10 rounded-3xl"
              />
              <a
                onClick={() => setActiveSection("Schools")}
                href="#"
                className={`text-white font-semibold ${
                  activeSection === "Schools" ? "underline" : ""
                }`}
              >
                Schools
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <img
                alt="dashboard-icon"
                src="/student.png"
                className="mr-2 w-10 rounded-3xl"
              />
              <a
                onClick={() => setActiveSection("Students")}
                href="#"
                className={`text-white font-semibold ${
                  activeSection === "Students" ? "underline" : ""
                }`}
              >
                Students
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <img
                alt="dashboard-icon"
                src="/message.png"
                className="mr-2 w-10 rounded-3xl"
              />
              <a
                onClick={() => setActiveSection("Messages")}
                href="#"
                className={`text-white font-semibold ${
                  activeSection === "Messages" ? "underline" : ""
                }`}
              >
                Messages
              </a>
            </li>
          </ul>
        </nav>
        <div className="mt-auto">
          <a href="#" className="flex items-center space-x-2">
            <img alt="settings-icon" src="https://placehold.co/24x24" />
            <span className="text-white">Settings</span>
          </a>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between p-4 border-b border-zinc-200">
          <div className="flex items-center space-x-2">
            <img alt="search-icon" src="https://placehold.co/24x24" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-zinc-100 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center space-x-4">
            <img alt="notification-icon" src="https://placehold.co/24x24" />
            <div className="flex items-center space-x-2">
              <img
                alt="profile-picture"
                src="https://placehold.co/32x32"
                className="rounded-full"
              />
              <span>Dnyaneshwar Sontakke</span>
              <img alt="dropdown-icon" src="https://placehold.co/24x24" />
            </div>
          </div>
        </header>

        <main className="flex-1 p-4">
          <div className="border-2 border-dashed border-zinc-300 rounded-lg h-full p-4">
            {activeSection === "Schools" && <SchoolData />}
            {activeSection === "Students" && <StudentData />}
            {activeSection === "Messages" && <MessagesData />}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;

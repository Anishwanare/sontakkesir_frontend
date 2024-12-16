import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const StudentData = () => {
  const [studentData, setStudentData] = useState([]);
  const [schools, setSchools] = useState([]);
  const [selectedSchool, setSelectedSchool] = useState("");
  const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const { data } = await axios.get(`${API_BASE_URL}/api/v3/student/get-students`, {
          headers: { "Content-Type": "application/json" },
        });

        const students = data?.getStudent || [];
        setStudentData(students);

        // Extract unique schools from student data
        const uniqueSchools = [...new Set(students.map((student) => student.school))];
        setSchools(uniqueSchools);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };

    fetchStudents();
  }, [API_BASE_URL]);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this student?")) return;

    try {
      await axios.delete(`${API_BASE_URL}/api/v3/student/delete/student/${id}`, {
        headers: { "Content-Type": "application/json" },
      });

      // Update state after successful deletion
      const updatedData = studentData.filter((student) => student._id !== id);
      setStudentData(updatedData);

      alert("Student deleted successfully");
    } catch (error) {
      console.error("Error deleting student:", error);
      alert("Failed to delete student");
    }
  };

  // Filter students by school selection
  const filteredData = selectedSchool
    ? studentData.filter((student) => student.school === selectedSchool)
    : studentData;

  return (
    <div className="p-4">
      {/* School Filter Dropdown */}
      <div className="mb-4">
        <label htmlFor="schoolSelect" className="block mb-2">
          Select School:
        </label>
        <select
          id="schoolSelect"
          value={selectedSchool}
          onChange={(e) => setSelectedSchool(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="">All Schools</option>
          {schools.map((school, index) => (
            <option key={index} value={school}>
              {school}
            </option>
          ))}
        </select>
      </div>

      {/* Student Data Table */}
      {filteredData.length > 0 ? (
        <div className="overflow-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                {[
                  "Sr No.",
                  "Full Name",
                  "Phone",
                  "School",
                  "Coordinator",
                  "Class",
                  "Talukka",
                  "District",
                  "Created At",
                  "Actions",
                ].map((header, index) => (
                  <th key={index} className="py-2 px-4 border-b">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData.map((student, index) => (
                <tr key={student._id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">{index + 1}</td>
                  <td className="py-2 px-4 border-b">
                    {`${student.firstName} ${student.middleName} ${student.lastName}`}
                  </td>
                  <td className="py-2 px-4 border-b">{student.phone}</td>
                  <td className="py-2 px-4 border-b">{student.school}</td>
                  <td className="py-2 px-4 border-b">{student.coordinator}</td>
                  <td className="py-2 px-4 border-b">{student.className}</td>
                  <td className="py-2 px-4 border-b">{student.talukka}</td>
                  <td className="py-2 px-4 border-b">{student.district}</td>
                  <td className="py-2 px-4 border-b">
                    {new Date(student.createdAt).toLocaleDateString()}
                  </td>
                  <td className="py-2 px-4 border-b flex space-x-2">
                    <Link
                      to={`/admin/update-student/${student._id}`}
                      className="text-blue-500"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => handleDelete(student._id)}
                      className="text-red-500"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-4">No students found!</div>
      )}
    </div>
  );
};

export default StudentData;

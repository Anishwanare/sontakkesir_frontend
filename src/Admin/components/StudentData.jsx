import axios from "axios";
import React, { useEffect, useState } from "react";

const StudentData = () => {
  const [studentData, setStudentData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [schools, setSchools] = useState([]);
  const [selectedSchool, setSelectedSchool] = useState("");

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_API_BASE_URL}/api/v3/student/get-students`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = response?.data?.getStudent || [];
        setStudentData(data);
        setFilteredData(data);

        // Extract unique schools from the student data
        const uniqueSchools = [...new Set(data.map((student) => student.school))];
        setSchools(uniqueSchools);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };

    fetchStudents();
  }, []);

  useEffect(() => {
    if (selectedSchool) {
      const filtered = studentData.filter(
        (student) => student.school === selectedSchool
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(studentData);
    }
  }, [selectedSchool, studentData]);

  return (
    <div className="p-4">
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

      {filteredData.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Sr No.</th>
                <th className="py-2 px-4 border-b">Full Name</th>
                <th className="py-2 px-4 border-b">Phone</th>
                <th className="py-2 px-4 border-b">School</th>
                <th className="py-2 px-4 border-b">Co-ordinator</th>
                <th className="py-2 px-4 border-b">Class</th>
                <th className="py-2 px-4 border-b">Talukka</th>
                <th className="py-2 px-4 border-b">District</th>
                <th className="py-2 px-4 border-b">Created At</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((student, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">{index + 1}</td>
                  <td className="py-2 px-4 border-b">
                    {student.firstName} {student.middleName} {student.lastName}
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-4">Loading.......!</div>
      )}
    </div>
  );
};

export default StudentData;

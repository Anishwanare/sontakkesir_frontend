import axios from "axios";
import React, { useEffect, useState } from "react";

const StudentData = () => {
  const [studentData, setStudentData] = useState([]);

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

        console.log(response?.data?.getStudent);
        setStudentData(response?.data?.getStudent);
      } catch (error) {
        console.error("Error fetching school data:", error);
      }
    };
    fetchStudents();
  }, []);

  return (
    <div className="p-4">
      {studentData.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Sr No.</th>
                <th className="py-2 px-4 border-b">First Name</th>
                <th className="py-2 px-4 border-b">Middle Name</th>
                <th className="py-2 px-4 border-b">Last Name</th>
                <th className="py-2 px-4 border-b">Phone</th>
                <th className="py-2 px-4 border-b">School</th>
                <th className="py-2 px-4 border-b">Class</th>
                <th className="py-2 px-4 border-b">Talukka</th>
                <th className="py-2 px-4 border-b">District</th>
                <th className="py-2 px-4 border-b">Created At</th>
              </tr>
            </thead>
            <tbody>
              {studentData.map((student, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">{index + 1} )</td>
                  <td className="py-2 px-4 border-b">{student.firstName}</td>
                  <td className="py-2 px-4 border-b">{student.middleName}</td>
                  <td className="py-2 px-4 border-b">{student.lastName}</td>
                  <td className="py-2 px-4 border-b">{student.phone}</td>
                  <td className="py-2 px-4 border-b">{student.school}</td>
                  <td className="py-2 px-4 border-b">{student.className}</td>
                  <td className="py-2 px-4 border-b">{student.talukka}</td>
                  <td className="py-2 px-4 border-b">{student.district}</td>
                  <td className="py-2 px-4 border-b">
                    {new Date(student.updatedAt).toLocaleDateString()}
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

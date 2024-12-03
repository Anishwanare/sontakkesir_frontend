import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SchoolData = () => {
  const [schoolData, setSchoolData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch schools
  useEffect(() => {
    const fetchSchools = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_APP_API_BASE_URL}/api/v2/school/get-schools`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setSchoolData(response?.data?.schools || []);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching school data:", error);
      }
    };
    fetchSchools();
  }, []);

  // Delete school
  const deleteSchool = async (id) => {
    if (!window.confirm("Are you sure you want to delete this school?")) return;
    try {
      await axios.delete(
        `${import.meta.env.VITE_APP_API_BASE_URL}/api/v2/school/delete-school/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setSchoolData((prevData) => prevData.filter((school) => school.id !== id));
      alert("School deleted successfully!");
    } catch (error) {
      console.error("Error deleting school:", error);
      alert("Failed to delete the school. Please try again.");
    }
  };

  return (
    <div className="p-4">
      {loading ? (
        <div className="text-center py-4">Loading.......!</div>
      ) : schoolData.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Sr No.</th>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">District</th>
                <th className="py-2 px-4 border-b">Village</th>
                <th className="py-2 px-4 border-b">Talukka</th>
                <th className="py-2 px-4 border-b">School ID</th>
                <th className="py-2 px-4 border-b">Co-ordinator</th>
                <th className="py-2 px-4 border-b">Password</th>
                <th className="py-2 px-4 border-b">Head Master Name</th>
                <th className="py-2 px-4 border-b">Head Master Mobile</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {schoolData.map((school, index) => (
                <tr key={school.id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">{index + 1})</td>
                  <td className="py-2 px-4 border-b">{school.name}</td>
                  <td className="py-2 px-4 border-b">{school.district}</td>
                  <td className="py-2 px-4 border-b">{school.schoolVillage}</td>
                  <td className="py-2 px-4 border-b">{school.talukka}</td>
                  <td className="py-2 px-4 border-b">{school.schoolId}</td>
                  <td className="py-2 px-4 border-b">{school.coordinator}</td>
                  <td className="py-2 px-4 border-b">{school.password}</td>
                  <td className="py-2 px-4 border-b">{school.headMasterName}</td>
                  <td className="py-2 px-4 border-b">{school.headMasterMobile}</td>
                  <td className="py-2 px-4 border-b text-blue-600 "><Link to={`/admin/update-school/${school._id}`}>Update</Link></td>
                  <td className="py-2 px-4 border-b flex space-x-2">
                    <button
                      onClick={() => deleteSchool(school._id)}
                      className=" text-red-500 py-1"
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
        <div className="text-center py-4">No data available!</div>
      )}
    </div>
  );
};

export default SchoolData;

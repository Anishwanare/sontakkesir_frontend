import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const SchoolData = () => {
  const [schoolData, setSchoolData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch schools
  useEffect(() => {
    const fetchSchools = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_API_BASE_URL}/api/v2/school/get-schools`,
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        setSchoolData(response?.data?.schools || []);
      } catch (err) {
        console.error("Error fetching school data:", err);
        setError("Failed to fetch school data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchSchools();
  }, []);

  // Delete school
  const handleDeleteSchool = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this school?");
    if (!confirmDelete) return;

    try {
      await axios.delete(
        `${import.meta.env.VITE_APP_API_BASE_URL}/api/v2/school/delete-school/${id}`,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setSchoolData((prevData) => prevData.filter((school) => school._id !== id));
      toast.success("School deleted successfully!");
    } catch (err) {
      console.error("Error deleting school:", err);
      toast.error(err.response?.data?.message || "Failed to delete school.");
    }
  };

  const tableStyles = "py-2 px-4 border-b";
  const noDataMessage = loading ? "Loading..." : "No data available!";

  return (
    <div className="p-4">
      {error && <div className="text-red-500 text-center py-2">{error}</div>}
      {schoolData.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className={tableStyles}>Sr No.</th>
                <th className={tableStyles}>Name</th>
                <th className={tableStyles}>District</th>
                <th className={tableStyles}>Village</th>
                <th className={tableStyles}>Talukka</th>
                <th className={tableStyles}>School ID</th>
                <th className={tableStyles}>Co-ordinator</th>
                <th className={tableStyles}>Password</th>
                <th className={tableStyles}>Head Master Name</th>
                <th className={tableStyles}>Head Master Mobile</th>
                <th className={tableStyles}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {schoolData.map((school, index) => (
                <tr key={school._id} className="hover:bg-gray-100">
                  <td className={tableStyles}>{index + 1}</td>
                  <td className={tableStyles}>{school.name}</td>
                  <td className={tableStyles}>{school.district}</td>
                  <td className={tableStyles}>{school.schoolVillage}</td>
                  <td className={tableStyles}>{school.talukka}</td>
                  <td className={tableStyles}>{school.schoolId}</td>
                  <td className={tableStyles}>{school.coordinator}</td>
                  <td className={tableStyles}>{school.password}</td>
                  <td className={tableStyles}>{school.headMasterName}</td>
                  <td className={tableStyles}>{school.headMasterMobile}</td>
                  <td className={`${tableStyles} flex space-x-2`}>
                    <Link to={`/admin/update-school/${school._id}`} className="text-blue-500">
                      Update
                    </Link>
                    <button
                      onClick={() => handleDeleteSchool(school._id)}
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
        <div className="text-center py-4">{noDataMessage}</div>
      )}
    </div>
  );
};

export default SchoolData;

import React, { useEffect, useState } from "react";
import axios from "axios";

const CoordinateData = () => {
  const [coordinators, setCoordinators] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCoordinators = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_API_BASE_URL}/api/v4/coordinator/fetch`
        );
        setCoordinators(response?.data?.coordinators || []);
      } catch (err) {
        console.error("Error fetching Coordinator data:", err);
        setError("Failed to fetch coordinators. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCoordinators();
  }, []);

  const tableStyles = "py-2 px-4 border-b";

  return (
    <div className="p-4">
      {loading ? (
        <div className="text-center py-4">Loading coordinators...</div>
      ) : error ? (
        <div className="text-center text-red-500 py-4">{error}</div>
      ) : coordinators.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className={tableStyles}>Sr. no</th>
                <th className={tableStyles}>Name</th>
                <th className={tableStyles}>Email</th>
                <th className={tableStyles}>Phone</th>
                <th className={tableStyles}>District</th>
                <th className={tableStyles}>Talukka</th>
                <th className={tableStyles}>Password</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {coordinators.map((coordinator, index) => (
                <tr key={coordinator.id || index} className="hover:bg-gray-100">
                  <td className={tableStyles}>{index + 1}</td>
                  <td className={tableStyles}>
                    {coordinator.firstName} {coordinator.lastName}
                  </td>
                  <td className={tableStyles}>{coordinator.email}</td>
                  <td className={tableStyles}>{coordinator.phone}</td>
                  <td className={tableStyles}>{coordinator.district}</td>
                  <td className={tableStyles}>{coordinator.talukka}</td>
                  <td className={tableStyles}>{coordinator.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-4">No Coordinators Found!</div>
      )}
    </div>
  );
};

export default CoordinateData;

import React, { useEffect, useState } from "react";
import axios from "axios";

const CoordinateData = () => {
  const [coordinators, setCoordinators] = useState([]);

  useEffect(() => {
    const fetchCoordinators = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_API_BASE_URL}/api/v4/coordinator/fetch`
        );
        // console.log(response?.data?.coordinators);
        setCoordinators(response?.data?.coordinators || []);
      } catch (error) {
        console.error("Error fetching Coordinator data:", error);
      }
    };
    fetchCoordinators();
  }, []);

  return (
    <div className="p-4">
      {coordinators.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Sr. no</th>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Phone</th>
                {/* <th className="py-2 px-4 border-b">School</th> */}
                {/* Add additional headers as needed */}
              </tr>
            </thead>
            <tbody className="text-center">
              {coordinators.map((coordinator, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">{index + 1})</td>
                  <td className="py-2 px-4 border-b">
                    {coordinator.firstName} {coordinator.lastName}
                  </td>
                  <td className="py-2 px-4 border-b">{coordinator.email}</td>
                  <td className="py-2 px-4 border-b">{coordinator.phone}</td>
                  {/* <td className="py-2 px-4 border-b">{coordinator.school}</td> */}
                  {/* Add additional columns as needed */}
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

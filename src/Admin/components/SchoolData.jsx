import axios from "axios";
import React, { useEffect, useState } from "react";

const SchoolData = () => {
  const [schoolData, setSchoolData] = useState([]);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await axios.get(
          "http://localhost:2050/api/v2/school/get-schools",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log(response?.data?.schools);
        setSchoolData(response?.data?.schools);
      } catch (error) {
        console.error("Error fetching school data:", error);
      }
    };
    fetchSchools();
  }, []);

  return (
    <div className="p-4">
      {schoolData.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Sr No.</th>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">District</th>
                <th className="py-2 px-4 border-b">Location</th>
                <th className="py-2 px-4 border-b">Village</th>
                <th className="py-2 px-4 border-b">School ID</th>
                <th className="py-2 px-4 border-b">Talukka</th>
              </tr>
            </thead>
            <tbody>
              {schoolData.map((school,index) => (
                <tr key={index} className="hover:bg-gray-100">

                  <td className="py-2 px-4 border-b">{index +1} )</td>
                  <td className="py-2 px-4 border-b">{school.name}</td>
                  <td className="py-2 px-4 border-b">{school.district}</td>
                  <td className="py-2 px-4 border-b">{school.location}</td>
                  <td className="py-2 px-4 border-b">{school.schoolVillage}</td>
                  <td className="py-2 px-4 border-b">{school.schoolId}</td>
                  <td className="py-2 px-4 border-b">{school.talukka}</td>
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

export default SchoolData;

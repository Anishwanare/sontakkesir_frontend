import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Registration = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [schoolId, setSchoolId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [schoolVillage, setSchoolVillage] = useState("");
  const [talukka, setTalukka] = useState("");
  const [district, setDistrict] = useState("");
  const [show, setShow] = useState(false);

  const handleShowPassword = () => {
    setShow((prev) => !prev);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_BASE_URL}/api/v2/school/register`,
        {
          name,
          location,
          schoolId,
          password,
          schoolVillage,
          talukka,
          district,
        }
      );

      console.log(response.data);
      if (response.data?.status) {
        toast.success(response.data?.message);
      } else {
        toast.error(response.data?.message);
      }

      setName("");
      setLocation("");
      setSchoolId("");
      setPassword("");
    } catch (error) {
      // Handling any errors
      toast.error("Failed to register. Please try again later.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 flex-col">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md dark:bg-gray-100">
      <div className="text-center p-2 text-2xl font-bold text-gray-700">
        School Registration
      </div>
        <div className="flex justify-center mb-6">
          <img src="/logo.jpeg" alt="Logo" className="w-24 h-24" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-black">
              School Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="name"
              className="px-2 block w-full mt-1 py-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-black dark:border-gray-600 text-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-black">
              Village
            </label>
            <input
              type="text"
              id="village"
              value={schoolVillage}
              onChange={(e) => setSchoolVillage(e.target.value)}
              placeholder="school Village"
              className="px-2 block w-full mt-1 py-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-black dark:border-gray-600 text-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-black">
              District
            </label>
            <input
              type="text"
              id="District"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              placeholder="District"
              className="px-2 block w-full mt-1 py-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-black dark:border-gray-600 text-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-black">
              Talukka
            </label>
            <input
              type="text"
              id="Talukka"
              value={talukka}
              onChange={(e) => setTalukka(e.target.value)}
              placeholder="Talukka"
              className="px-2 block w-full mt-1 py-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-black dark:border-gray-600 text-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="location" className="block text-black">
              Location
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="location"
              className="px-2 block w-full mt-1 py-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-black dark:border-gray-600 text-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="school-id" className="block text-black">
              School ID
            </label>
            <input
              type="text"
              id="school-id"
              value={schoolId}
              onChange={(e) => setSchoolId(e.target.value)}
              placeholder="scholl id"
              className="px-2 block w-full mt-1 py-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-black dark:border-gray-600 text-black"
            />
          </div>
          <div className="mb-6">
            <span className="flex justify-between">
              <label htmlFor="password" className="block text-black">
                Password
              </label>
              <label
                htmlFor=""
                onClick={handleShowPassword}
                className="cursor-pointer"
              >
                {show ? "Hide" : " Show"}
              </label>
            </span>
            <input
              type={show ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              className="px-2 block w-full mt-1 py-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-black dark:border-gray-600 text-black"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 font-bold text-white bg-green-500 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              {loading ? "Loading..." : "Register"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;

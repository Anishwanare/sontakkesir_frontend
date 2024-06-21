import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const StudentRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    password: "",
    phone: "",
    villageName: "",
    talukka: "",
    district: "",
    role: "Student", // Default role
  });

  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleShowPassword = () => {
    setShow((prev) => !prev);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_BASE_URL}/api/v3/student/register`,
        formData
      );

      if (response.data.status) {
        toast.success("Student registered successfully!");
        setFormData({
          firstName: "",
          middleName: "",
          lastName: "",
          password: "",
          phone: "",
          villageName: "",
          talukka: "",
          district: "",
          role: "Student",
        });
      } else {
        toast.error(response.data.message);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 ">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md dark:bg-gray-100">
        <div className="">Student Registration</div>
        <div className="flex justify-center mb-6">
          <img src="/logo.jpeg" alt="Logo" className="w-24 h-24" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-black">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="px-2 block w-full mt-1 py-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-black dark:border-gray-600 text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="middleName" className="block text-black">
              Middle Name
            </label>
            <input
              type="text"
              id="middleName"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              placeholder="Middle Name"
              className="px-2 block w-full mt-1 py-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-black dark:border-gray-600 text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-black">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="px-2 block w-full mt-1 py-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-black dark:border-gray-600 text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-black">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="px-2 block w-full mt-1 py-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-black dark:border-gray-600 text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="villageName" className="block text-black">
              Village Name
            </label>
            <input
              type="text"
              id="villageName"
              name="villageName"
              value={formData.villageName}
              onChange={handleChange}
              placeholder="Village Name"
              className="px-2 block w-full mt-1 py-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-black dark:border-gray-600 text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="talukka" className="block text-black">
              Talukka
            </label>
            <input
              type="text"
              id="talukka"
              name="talukka"
              value={formData.talukka}
              onChange={handleChange}
              placeholder="Talukka"
              className="px-2 block w-full mt-1 py-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-black dark:border-gray-600 text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="district" className="block text-black">
              District
            </label>
            <input
              type="text"
              id="district"
              name="district"
              value={formData.district}
              onChange={handleChange}
              placeholder="District"
              className="px-2 block w-full mt-1 py-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-black dark:border-gray-600 text-black"
              required
            />
          </div>
          <div className="mb-6">
            <span className="flex justify-between">
              <label htmlFor="password" className="block text-black">
                Password
              </label>
              <label
                htmlFor="password"
                onClick={handleShowPassword}
                className="cursor-pointer"
              >
                {show ? "Hide" : "Show"}
              </label>
            </span>
            <input
              type={show ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="px-2 block w-full mt-1 py-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-black dark:border-gray-600 text-black"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 font-bold text-white bg-green-500 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              disabled={loading}
            >
              {loading ? "Loading..." : "Register"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentRegistration;

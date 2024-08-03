import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CoordinatorRegistration = () => {
  const [schoolData, setSchoolData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    school: "",
    district: "",
    talukka: "",
    password: "",
    coordinatorID: "",
  });

  // Function to capitalize the first letter of a string
  const capitalizeFirstLetter = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  // Fetch schools data on component mount
  useEffect(() => {
    const getSchools = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_API_BASE_URL}/api/v2/school/get-schools`
        );
        if (response?.data?.status) {
          setSchoolData(response?.data?.schools);
        }
      } catch (err) {
        console.error(
          err.response?.data?.message || "Error in fetching schools!"
        );
      }
    };
    getSchools();
  }, []);

  // Handle input change for form fields
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.coordinatorID !== "311721") {
      toast.error("Invalid Coordinator ID");
      return;
    } else {
      setLoading(true);
      
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_APP_API_BASE_URL}/api/v4/coordinator/register`,
          formData
        );
        if (response.data.status) {
          toast.success("Coordinator registered successfully");
          // Reset form data after successful registration

        } else {
          toast.error(response?.data?.message || "Registration failed");
        }
      } catch (err) {
        toast.error(err.response?.data?.message || "Something went wrong!");
      } finally {
        setLoading(false);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          school: "",
          district: "",
          talukka: "",
          password: "",
          coordinatorID: "",  // Resetting Coordinator ID field
        });
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Coordinator Registration
      </h2>
      <div className="flex justify-center mb-6">
        <img src="/logo.jpeg" alt="Logo" className="h-24" />
      </div>
      <form onSubmit={handleSubmit}>
        {/* First Name */}
        <div className="mb-4">
          <label
            className="block text-sm font-semibold mb-1"
            htmlFor="firstName"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label
            className="block text-sm font-semibold mb-1"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1" htmlFor="phone">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* School */}
        {/* <div className="mb-4">
          <label className="block text-sm font-semibold mb-1" htmlFor="school">
            School
          </label>
          <select
            id="school"
            name="school"
            value={formData.school}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500"
            required
          >
            <option value="" disabled>
              Select your school
            </option>
            {schoolData.length > 0 ? (
              schoolData.map((school, index) => (
                <option key={index} value={school.id}>
                  {capitalizeFirstLetter(`${school.name} , ${school.location}`)}
                </option>
              ))
            ) : (
              <option disabled>School data loading...</option>
            )}
          </select>
        </div> */}

        {/* District */}
        <div className="mb-4">
          <label
            className="block text-sm font-semibold mb-1"
            htmlFor="district"
          >
            District
          </label>
          <input
            type="text"
            id="district"
            name="district"
            value={formData.district}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Taluka */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1" htmlFor="talukka">
            Taluka
          </label>
          <input
            type="text"
            id="talukka"
            name="talukka"
            value={formData.talukka}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label
            className="block text-sm font-semibold mb-1"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-semibold mb-1"
            htmlFor="coordinatorID"
          >
            Coordinator ID
          </label>
          <input
            type="text"
            id="coordinatorID"
            name="coordinatorID"
            value={formData.coordinatorID}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-600 transition duration-200"
        >
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default CoordinatorRegistration;

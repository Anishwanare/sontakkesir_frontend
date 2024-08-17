import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Registration = () => {
  const [name, setName] = useState("");
  const [schoolId, setSchoolId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [schoolVillage, setSchoolVillage] = useState("");
  const [talukka, setTalukka] = useState("");
  const [district, setDistrict] = useState("");
  const [coordinators, setCoordinators] = useState([]);
  const [selectedCoordinator, setSelectedCoordinator] = useState("");
  const [headMasterName, setHeadMasterName] = useState("");
  const [headMasterMobile, setHeadMasterMobile] = useState("");
  const [show, setShow] = useState(false);

  const handleShowPassword = () => {
    setShow((prev) => !prev);
  };

  // array of school IDs

  const validSchoolIds = [
    "E01MH24S4",
    "E0224MHP5",
    "E03MH24Q6",
    "E0424MHR7",
    "E05MHT248",
    "E06MHA249",
    "E0724MH10",
    "E08M9HB11",
    "E09H1MC12",
    "E1M2HP013",
    "E2H3KT0143",
    "E5U67T0151",
    "E8J88L0165",
    "E9B67G0175",
    "E8C65H0187",
    "E9G68F0196",
    "ED56JH2044",
    "EK78MH2133",
    "ES99KL0205",
    "EK23OP0218",
    "E01MH24S57",
    "E0224MHP70",
    "E03MH24108",
    "E0444MHR81",
    "E05MHM2484",
    "E06MSA2454",
    "E0726MH154",
    "E08M5HB120",
    "E09H2MC174",
    "E1M3HP0145",
    "E2G3KT0197",
    "E5U68T0174",
    "E8J68L0124",
    "E9B67P0173",
    "E8C65H0175",
    "E9G60F0195",
    "ED56LH2099",
    "EK79MH2155",
    "ES99KD0206",
    "EG23OP2156",
  ];

  const handleSubmit = async (e) => {
    if (schoolId !== "" && !validSchoolIds.includes(schoolId)) {
      toast.error("Incorrect School ID");
      return;
    }
    setLoading(true);
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_BASE_URL}/api/v2/school/register`,
        {
          name,
          schoolId,
          password,
          schoolVillage,
          talukka,
          district,
          coordinator: selectedCoordinator,
          headMasterName,
          headMasterMobile,
        }
      );

      if (response.data?.status) {
        toast.success(response.data?.message);
        // console.log(headMasterName);
        // console.log(headMasterMobile);
        console.log(response?.data);
        
        

      } else {
        toast.error(response.data?.message);
      }
    } catch (error) {
      toast.error("Failed to register. Please try again later.");
      console.error("Error:", error);
    } finally {
      setName("");
      setSchoolId("");
      setPassword("");
      setSchoolVillage("");
      setDistrict("");
      setTalukka("");
      setSelectedCoordinator("");
      setHeadMasterName("");
      setHeadMasterMobile("");
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchCoordinators = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_API_BASE_URL}/api/v4/coordinator/fetch`
        );
        setCoordinators(response?.data?.coordinators || []);
      } catch (error) {
        console.error("Error fetching Coordinator data:", error);
      }
    };
    fetchCoordinators();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 flex-col">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md dark:bg-gray-100">
        <div className="text-center p-2 text-2xl font-bold text-gray-700">
          School Registration
        </div>
        <div className="flex justify-center mb-6">
          <img src="/logo.jpeg" alt="Logo" className="h-24" />
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
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="headmastername" className="block text-black">
              Head Master Name
            </label>
            <input
              type="text"
              id="headMasterName"
              value={headMasterName}
              onChange={(e) => setHeadMasterName(e.target.value)}
              placeholder="Head Master Name"
              className="px-2 block w-full mt-1 py-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-black dark:border-gray-600 text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="headmastermobile" className="block text-black">
              Head Master Mobile
            </label>
            <input
              type="text"
              id="headmastermobile"
              value={headMasterMobile}
              onChange={(e) => setHeadMasterMobile(e.target.value)}
              placeholder="Head Master Mobile"
              className="px-2 block w-full mt-1 py-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-black dark:border-gray-600 text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="village" className="block text-black">
              Village
            </label>
            <input
              type="text"
              id="village"
              value={schoolVillage}
              onChange={(e) => setSchoolVillage(e.target.value)}
              placeholder="school Village"
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
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              placeholder="District"
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
              value={talukka}
              onChange={(e) => setTalukka(e.target.value)}
              placeholder="Talukka"
              className="px-2 block w-full mt-1 py-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-black dark:border-gray-600 text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="coordinator" className="block text-gray-700">
              Coordinator
            </label>
            <select
              id="coordinator"
              name="coordinator"
              value={selectedCoordinator}
              onChange={(e) => setSelectedCoordinator(e.target.value)}
              className="px-2 block w-full mt-1 py-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 text-gray-700"
              required
            >
              <option value="" disabled>
                Select your Coordinator
              </option>
              {coordinators.map((coordinate, index) => (
                <option key={index} value={coordinate.id}>
                  {`${coordinate.firstName} ${coordinate.lastName}`}
                </option>
              ))}
            </select>
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
              placeholder="school id"
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
                onClick={handleShowPassword}
                className="cursor-pointer text-blue-500"
              >
                {show ? "Hide" : "Show"}
              </label>
            </span>
            <input
              type={show ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
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

export default Registration;

import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigateTo = useNavigate();

  const handleGoHome = () => {
    navigateTo("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
        <button
          onClick={handleGoHome}
          className="px-4 py-2 font-bold text-white bg-indigo-500 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;

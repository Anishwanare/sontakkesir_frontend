import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Privacy Policy Section */}
        <div className="flex justify-center items-center">
          <a href="#" className="text-yellow-400 hover:text-yellow-300">
            Privacy Policy
          </a>
        </div>

        {/* Logo Section */}
        <div className="flex justify-center items-center">
          <img src="https://placehold.co/100x100" alt="Logo" className="h-16" />
        </div>

        {/* Copyright Section */}
        <div className="flex flex-col justify-center items-center">
          <p className="text-center mb-2">
            <span className="text-yellow-400">&#128274;</span> Dnyanankur
            Welfare Foundation
          </p>
          <p className="text-center text-sm">&copy; 2023 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";

const Notice = ({notice,desc}) => {
  return (
    <div
      className="bg-blue-100 border-t-4 border-blue-500 rounded-b text-blue-900 px-4 py-3  top-0 sticky w-full z-50 flex justify-around items-center"
      role="alert"
    >
      <div className="flex">
        <div className="py-1">
          <svg
            className="fill-current h-6 w-6 text-blue-500 mr-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0zm9-5a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0V5zm0 6a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2z" />
          </svg>
        </div>
        <div className="flex flex-col ">
          <p className="font-bold">{notice}</p>
          <p className="text-sm">{desc}</p>
        </div>
      </div>
      <div className="hover:underline">
        <Link to={"/"}>Go to Home</Link>
      </div>
      <div className="hover:underline">
        <Link to={"/admin-login"}>ADMIN</Link>
      </div>
    </div>
  );
};

export default Notice;

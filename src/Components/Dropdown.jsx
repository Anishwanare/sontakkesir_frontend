import React, { useState } from "react";

const Dropdown = ({ title, desc }) => {
  const [dropDown, setDropDown] = useState(false);
  const handleClick = () => {
    setDropDown(!dropDown);
  };

  return (
    <div className="bg-white shadow-md rounded-lg mb-4 max-w-4xl md:mx-auto mx-10  ">
      <div
        className="p-4 flex items-center cursor-pointer"
        onClick={handleClick}
      >
        <svg
          className={`w-6 h-6 text-zinc-600 mr-2 transition-transform ${
            dropDown ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
        <span className="text-zinc-800">{title}</span>
      </div>
      {dropDown && <div className="p-4 text-zinc-600">{desc}</div>}
    </div>
  );
};

export default Dropdown;
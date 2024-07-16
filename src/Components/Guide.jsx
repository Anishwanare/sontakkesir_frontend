import React from "react";

const Guide = () => {
  return (
    <>
      <div className="flex flex-col items-center space-y-4 py-20 px-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold  inline-block px-2 py-1">
            Achievements
          </h2>
          <hr className="border-t-2 border-yellow-700 mt-1 w-16 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-900 text-yellow-300 p-4 rounded-lg shadow-md">
            Announcement 2023 State Level Prize Distribution ceremony
          </div>
          <div className="bg-blue-900 text-yellow-300 p-4 rounded-lg shadow-md">
            How to check Manthan General Knowledge Examination Result 2024
          </div>
          <div className="bg-blue-900 text-yellow-300 p-4 rounded-lg shadow-md">
            Manthan General Knowledge Examination 2024 Answer key.
          </div>
        </div>
      </div>
    </>
  );
};

export default Guide;

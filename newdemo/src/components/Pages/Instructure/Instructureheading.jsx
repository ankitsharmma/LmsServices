import React from "react";

const Instructureheading = () => {
  return (
    <div className="flex justify-between items-center p-6 bg-white w-full">
      <div>
        <h2 className="text-3xl font-bold-900 capalize text-blue-400  ">Instructors</h2>
        <p className="text-gray-500 text-sm">#Learn from the experienced & skillful instructors</p>
      </div>
      <button className="border border-gray-400 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100">
        View All
      </button>
    </div>
  );
};

export default Instructureheading;

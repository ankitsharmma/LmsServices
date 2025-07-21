import React from "react";

const BestsellingCourses = () => {
  return (
    <div className="flex justify-between items-center p-6 bg-white w-full ">
      <div>
        <h2 className="text-3xl font-bold-900  capitalize text-blue-400">Bestselling Courses</h2>
        <p className="text-gray-500 text-sm">#Learn from bestselling courses</p>
      </div>
      <a href="/Cources-pages" className=" border-1 bg-white  px-4 py-2 shadow-2xl opacity-90 rounded-2xl text-gray-700 hover:bg-gray-100">
        View All
      </a>
    </div>
  );
};

export default BestsellingCourses;

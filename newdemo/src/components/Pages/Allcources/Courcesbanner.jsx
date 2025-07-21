import React from "react";

const CourseSearch = () => {
  return (
    <div
      className="relative w-full h-[350px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-photo/top-view-office-desk-with-supplies_127657-8756.jpg?ga=GA1.1.1039965199.1713434742&semt=ais_hybrid')",
        backgroundAttachment: "fixed", // <-- This line fixes the background
      }}
    >
      <div className="relative text-center text-white">
        <h1 className="text-3xl font-bold">Courses</h1>

        {/* Optional: Add search bar here */}
      </div>
    </div>
  );
};

export default CourseSearch;

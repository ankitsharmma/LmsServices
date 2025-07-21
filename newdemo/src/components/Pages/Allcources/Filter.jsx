import { useState } from "react";
import { Grid, List } from "lucide-react";

const courses = [
  { id: 1, title: "React for Beginners", category: "Free", description: "Learn the fundamentals of React.js", duration: "4 weeks",  image: "https://img.freepik.com/free-vector/javascript-frameworks-concept-illustration_114360-943.jpg?ga=GA1.1.1039965199.1713434742&semt=ais_hybrid&w=740", price: "₹14,999.60", originalPrice: "₹37,499", startDate: "28 Jan 2025" },
  { id: 2, title: "Advanced TypeScript", category: "Discount", description: "Master TypeScript with advanced concepts", duration: "6 weeks",  image: "https://iwaytrainings.com/store/867/Course%20Thumb/Kb.jpeg", price: "₹14,999.60", originalPrice: "₹37,499", startDate: "28 Jan 2025" },
  { id: 3, title: "Agile in Engineering", category: "Upcoming", description: "Apply Agile methodologies in mechanical engineering", duration: "5 weeks",  image: "https://iwaytrainings.com/store/867/Course%20Thumb/Kb.jpeg", price: "₹14,999.60", originalPrice: "₹37,499", startDate: "28 Jan 2025" },
  { id: 4, title: "UI/UX Design Basics", category: "Download", description: "Understand the basics of UI/UX design principles", duration: "3 weeks",  image: "https://img.freepik.com/free-vector/ui-ux-differences-concept-illustration_114360-14909.jpg?ga=GA1.1.1039965199.1713434742&semt=ais_hybrid&w=740", price: "₹14,999.60", originalPrice: "₹37,499", startDate: "28 Jan 2025" },
  { id: 5, title: "DevOpsEngineer", category: "Discount", description: "Learn DevOps methodologies and tools", duration: "150 hours",  image: "https://img.freepik.com/premium-vector/programmers-practice-development-software-operations-devops-concept_773186-1450.jpg?ga=GA1.1.1039965199.1713434742&semt=ais_hybrid&w=740", price: "₹14,999.60", originalPrice: "₹37,499", startDate: "28 Jan 2025" }
];

export default function FilterBar() {
  const [view, setView] = useState("list");
  const [filters, setFilters] = useState({
    upcoming: false,
    free: false,
    discount: false,
    download: false,
  });
  const [search, setSearch] = useState("");

  const toggleFilter = (filter) => {
    setFilters((prev) => ({ ...prev, [filter]: !prev[filter] }));
  };

  const filteredCourses = courses.filter((course) =>
    (Object.values(filters).some((value) => value)
      ? Object.entries(filters).some(([key, value]) => value && course.category.toLowerCase() === key)
      : true) &&
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full max-w-5xl mt-6 mx-auto px-4 md:px-8">
      {/* Filter Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-white p-4 rounded-xl shadow-2xl shadow-blue-500/50 mb-4">
        <div className="flex space-x-2 mb-3 md:mb-0">
          <button className={`p-2 rounded-xl ${view === "grid" ? "text-blue-700" : "text-gray-500"}`} onClick={() => setView("grid")}>
            <Grid size={24} />
          </button>
          <button className={`p-2 rounded-md ${view === "list" ? "text-blue-700" : "text-gray-500"}`} onClick={() => setView("list")}>
            <List size={24} />
          </button>
        </div>
        <input
          type="text"
          placeholder="Search courses..."
          className="border-2 border-blue-300 px-3 py-2 rounded-xl outline-none text-sm w-full md:w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex space-x-3 overflow-x-auto w-full md:w-auto scrollbar-hide">
          {Object.keys(filters).map((key) => (
            <button
              key={key}
              className={`px-3 py-2 rounded-md text-sm ${filters[key] ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
              onClick={() => toggleFilter(key)}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Summary and Reset */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-gray-600">
          Showing {filteredCourses.length} of {courses.length} courses
        </p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm"
          onClick={() => setFilters({ upcoming: false, free: false, discount: false, download: false })}
        >
          All Courses
        </button>
      </div>

      {/* Course Cards */}
      <div className={`grid ${view === "grid" ? "grid-cols-1 sm:grid-cols-2 gap-4" : "grid-cols-1"} mt-6 gap-4 mb-20`}>
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div key={course.id} className="bg-white p-4 rounded-2xl shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/50 transition-transform transform hover:scale-105">
              {course.image && (
                <img
                  src={course.image}
                  alt={course.title}
                  className="rounded-2xl w-full h-56 object-cover"
                />
              )}
              <h3 className="font-semibold text-lg mt-2">{course.title}</h3>
              <p className="text-gray-500 text-sm">Category: {course.category}</p>
              <p className="text-gray-600 text-sm">{course.description}</p>
              <p className="text-gray-500 text-xs">Duration: {course.duration}</p>
              {/* <p className="text-gray-500 text-xs">Instructor: {course.instructor}</p> */}
              {course.startDate && <p className="text-gray-500 text-xs">Start Date: {course.startDate}</p>}
              {course.price && (
                <p className="text-green-600 font-semibold">
                  Price: {course.price} <span className="line-through text-gray-400">{course.originalPrice}</span>
                </p>
              )}
              <a href={`/Cources-pages/${course.id}`} className="mt-2 inline-block bg-blue-500 text-white px-3 py-2 rounded-md text-sm">
                More Information
              </a>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No courses found.</p>
        )}
      </div>
    </div>
  );
}

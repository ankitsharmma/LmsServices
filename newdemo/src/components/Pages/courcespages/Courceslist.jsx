import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const courses = [
  {
    instructor: "Akashdeep Srivastava",
    title: "DevOps Engineering Course",
    category: "DevOps Engineering",
    duration: "350:00 Hours",
    date: "3 Aprl 2025",
    price: "₹25,999",
    image:
      "https://img.freepik.com/free-vector/hand-drawn-flat-design-devops-illustration_23-2149365031.jpg?ga=GA1.1.1039965199.1713434742&semt=ais_hybrid&w=740",
  },
  {
    instructor: "Yasharth Bhatt",
    title: "Linex Administration Course",
    category: "Linex Administration",
    duration: "120:00 Hours",
    date: "6 Jan 2025",
    price: "₹37,499",
    image:
      "https://img.freepik.com/free-vector/programmer-concept-illustration_114360-2417.jpg?ga=GA1.1.1039965199.1713434742&semt=ais_hybrid&w=740",
  },
  {
    instructor: "Yasharth Bhatt",
    title: "Full Stack Development Course",
    category: "Full Stack Development",
    duration: "150:00 Hours",
    date: "12 Jan 2025",
    price: "₹37,499",
    image:
      "https://img.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_23-2149383348.jpg?ga=GA1.1.1039965199.1713434742&semt=ais_hybrid&w=740",
  },
];

// Background color variants for variety
const bgVariants = [
  "bg-[#0B0F29]",
  "bg-[#1A1F3C]",
  "bg-[#20264D]",
  "bg-[#13182B]",
  "bg-[#2E3A59]",
];

const CourseCard = ({ course, index }) => {
  const bgColor = bgVariants[index % bgVariants.length];

  return (
    <div
      data-aos="flip-left"
      data-aos-delay={index * 100}
      className={`bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]  text-white rounded-2xl shadow-2xl shadow-blue-500/50 overflow-hidden transition-transform transform hover:scale-105 duration-300`}
    >
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col h-full">
        <h3 className="text-xl font-semibold">{course.title}</h3>
        <p className="text-gray-300 mt-1">
          in{" "}
          <span className="text-blue-400 font-medium">{course.category}</span>
        </p>
        <div className="flex items-center justify-between mt-2 text-gray-400 text-sm">
          <p>{course.duration}</p>
          <p>{course.date}</p>
        </div>
        <p className="text-blue-300 font-bold text-lg mt-3">{course.price}</p>
        <a
          href="#"
          className="mt-4 w-full text-center px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:brightness-110 transition-all duration-300"
        >
          Enroll Now
        </a>
      </div>
    </div>
  );
};

const CourseList = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} index={index} />
        ))}
      </div>
    </section>
  );
};

export default CourseList;

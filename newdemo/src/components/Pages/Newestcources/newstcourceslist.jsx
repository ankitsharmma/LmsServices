import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const courses = [
  {
    instructor: "Akashdeep Srivastava",
    title: "Python Programming Course",
    category: "Python Programming",
    duration: "350:00 Hours",
    date: "3 April 2025",
    price: "₹10,999",
    image: "https://img.freepik.com/free-vector/hand-drawn-web-developers-working_23-2148819605.jpg?ga=GA1.1.1039965199.1713434742&semt=ais_hybrid&w=740",
  },
  {
    instructor: "Yasharth Bhatt",
    title: "Dockers Course",
    category: "Dockers",
    duration: "120:00 Hours",
    date: "6 Jan 2025",
    price: "₹6,999",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJ8AqAMBIgACEQEDEQH/xAAcAAEAAwADAQEAAAAAAAAAAAAABQYHAgMEAQj/xAA9EAABAwMBBQUFBQYHAQAAAAABAAIDBAURBhITITFBB1FhcYEUIkKRoSNScrHBMjM2stHwQ1V0ksLD0hX/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBQYE/8QAJxEBAQACAgEDAwQDAAAAAAAAAAECAxESMQQhQVFh4TOBkaEFEzL/2gAMAwEAAhEDEQA/ANcREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEULZtUW+8VrqSlZUsmbGZCJoSz3cgdfEqaU2WeUSyzmCIihIiIgIiICIiAiIgIiICIiAiIgIiICIiDONA5Gpzn/Lz/O1aOsz7Ov4mecuJNA48XF3xt7ytMW2/wDUr5fR/oYiIozU1zNosdVWxgGVjdmIHq9xw36kLF9VvCTRZ3p++1tkqYobtVvq6Gofh00nF0Ejjzz9wk+i0VabNeWvLrky078N2HfC+z4iIs2oiIgIvLcLnQ2yNslwq4aZjzstMrw3J8F6Wua9ocwhzXDIIOQQg+oiICIiAiIgIi8kNzoJ62SihrIJKqL9uFsgLm+Y9UHrREQYza7hXWa6e0UTqXeOptj7RrnN2Sc+Bz7qmRrq+gsJ/wDnuaXNBDYXg4LgPveKrT54faWuEmWiHZzsO54Ixy8V1maNrW+9nizOGO4YeCencuhs14WW/Lh6d27G44Tnj2+G7qsdorXHTEjxnZinhe89zQ8cfquZ1zp7jisld4Cll/8AKi7xrCnuNFPRW+11FWyZhjc+oG5jAI+Z9AvjwwzuU4jrbdmuYXtlJEJWRNqKSaJw2mvYRw68F7bfra6QW+lgNqje+KJrHyzVOC8gYzgN4KCbM+koooJ5TK8YZtMaSXnoAOq5wxVtS4Mo7ZXTOPLEDmj1LsALsb8NOfF23ivL+k2+r1dp6fHtLfPHsuNq1zFU1cNJcaCWklneGRvjdvWOceQ4AEfJW5VDSelJqOqbc7wYzVNBEEDDlsOeZJ6uxw7gp7UF5p7FbJK6qy4N91kY5yPPJo/vllcfbMO/Gvw9P6e7f9cu7jt9kj0yuLZGPOGPa49wOVjm81LrmskEZcYGniwP2IIu4HvPzK76js7v1DH7RSup5ZGcdmnlLX+mQPzVerTtfiJXth/e2j8M3/Wrvpj+GrT/AKKH+QLFbtd7jcoqamukjpH0Ze1rpG4kGcZDu/Gz14rW6S7U9l0Rb66rJ2I6KEBreb3Fgw0eaWeyMbzbVhXFsjHnDHtce4HKxx9VqTXNdJHBt7hvExNfsQxDptHqfPJ7l3zdnN+pI9/TPpZZW8dmGUtfnwJA4+qdU9r8RryLMNGazraSvZab8+R8bn7pss37yF/LDs8SM8OPEeS0O83Ons9tnrqskRxDOBzcejR4kqLOFplLHsXBs0T3bLJWOd3BwJWPS1eo9c3B8MG0IG8dy1+zDE3ptHqfPJ7gvRUdmt6p4t7TyUc0jeIZG8td6EgD6hTwr2vxGurItJ8O0yTHWqqv+avWhYL3T2h0d/L96JTuRK8PeGYHMjPXPXKoOm5oqbtFnnne2OKOoq3Pe44DQA/iUnyjK+GwHgMlFkGqdSVurLgy2WqOT2Qv2Yom8HTn7zu4dcdOZ8CdU9/pHRU6ihjla2CJ8rM+87lw8Mr1Q3qhlGd8WHue0jH6LxL45wbzXoJNkvNy/r8vF3PRZJML/P4SZudCBn2qP0co+qv1PtiOISOZ8Tw3H5rzPeXeS5UdJU3KuioKFu1USnn0jb1cfAKu3PLHHt24/b8tNGrDZnMJhbb9/wAJfSlVbZL62trqpkdPRs2og9p9+U8M8vhGfUhWa9doVupYy22RTVs/QiNzGN8yRx9PmFZLLbKez22ChpR7kQ4uPN7urj4kr2ribdl2Z3LJ6zRox0a5rw8RHWq+226xtdR1THOcP3Tzsvb5tPFUXtgqH762U+TuwySQjvPAD9fmtLwqH2s2uSot9LcYmlwpXOZKB0Y7HH0IHzWc8tcv+Vm0nborZp6hp4WgExNkkcPie4ZJ/vphSypugdVUldbae3VczIq6nYI2h5xvWjgCO845hW6pqIKSB09VKyGJgy58jg0D1S+Uyzhl/azb4ae60dbE0NfVxuEuOpZs4Pnh2PRdWuZ3jS+lacH7M0bZHDvIYwD8z814tW3WTV2o4ae2NL4gdxSgjG2SeLz3D9BlWjtJsbhpyglpWlzbY0RuwP8ADIAz6Fo+qt9Gd9+eFi0Vb4rdpmhZEBtSxNmkcPie4An+nkApxUfs81TS1FtgtNbKyGrp2iOLbOBKwcsHvA4Y8Mq6zzxU0LpqiVkUTRlz3uDQB5lVvlpjZwzPtct8MVZQ10bQ2Soa+OXHxbONk/IkegXDXdymq9J6b3jiTUR72Q/ec1jR+bio3Wl5dqm/U9NbGGSGI7qn4cZHOIy7wHAegyrTr2wOZo6ibT5e61NaHYHEs2Q1x+gPoVb6M/PPCb0FQRUGlqHdNG3URieR3VznDP0GB6KwKhdneq6R1vhtFwmZDUQ+7A55w2VvQZ7xyx14K9TTRQRGWaVkcTRkve4BoHmq3y0xs4di/P14YZL9XxtALnVsrRkgDJkPU8At5oq2lr4RPQ1MVRETjbieHDPmFhtXQ1Fy1JcaWjj3kzqmoc1nV2y5xIHjgK2Kmfw1bRulYNPUu8k2ZbhK37WXo0fdb4ePX5AFVdBazNM6O0XmQ7rOxBPIeMZ5bDs9O49OXkVbLytjZx7K86UnlwXWePNd1FQ3C4kC3W+pqAfjDNln+44CtNp7PqmYtkvdW2KPrT0xyT4F5/T5rt7PV6sPnl5XR/jd+z44n3VW30dZdav2O2Q72b43HgyId7j08ua1PTGnabT9IWRne1UvGeoIwXnuHcB0Ckbdb6O2Uraagp44IW/Cwc/E958SvSuVv9Rltvv4eh9L6PX6ae3vfqIiLB9YuMsbJY3xysa+N4LXNcMhwPMELkiDOL72Zl8rpbJUxsjcc+z1GcN8nDPDzHqotnZzqCZ7W1E9I1gP7TpnOx5DH9FraK3aq9IruldI0OnmmVrjUVrhh1Q8YwO5o6D6qwva17HMe0Oa4YIIyCF9RVTJwzq/9mglmfNY6iOJjjn2afOy38Lhnh4EeqiGdnOoZXNZNNSNjB5unc4DyGFriK3ao6RWtKaOotP/AG5camtIwZ3NwGjuaOnnzVlcA5pa4AgjBB6oiqmThnd/7NWzTPmsc8cLXcTTTZ2W/hcM4HhgqGZ2cagkIZJJRsYDzdO4j0GytdRW7VHSIPSGnW6ctz6bfmeWWTeSP2dkZwBgDuwFB2PRtdQaynu880Bpd5LJHsE7bi/PAjHDG0evRXhFHKesUnWuh23eQ11q3UVa4/asecMl8eA4O/NFdkTtUXCUREULCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg//9k=",
  },
  {
    instructor: "Yasharth Bhatt",
    title: "Auto cad Course",
    category: "Auto cad",
    duration: "150:00 Hours",
    date: "12 Jan 2025",
    price: "₹15,999",
    image: "https://img.freepik.com/premium-vector/architect-working-blueprint-with-ruler_1242828-3131.jpg?ga=GA1.1.1039965199.1713434742&semt=ais_hybrid&w=740",
  },
  {
    instructor: "Akashdeep Srivastava",
    title: "Data Science Course",
    category: "Data Science",
    duration: "200:00 Hours",
    date: "20 Jan 2025",
    price: "₹20,999",
    image: "https://img.freepik.com/free-vector/technology-concept-landing-page-template_23-2148331038.jpg?ga=GA1.1.1039965199.1713434742&semt=ais_hybrid&w=740",
  },
  {
    instructor: "Yasharth Bhatt",
    title:" Kubrenetes Course",
    category: "Kubrenetes",
    duration: "120:00 Hours",
    date: "6 Jan 2025",
    price: "₹6,999",
    image: "https://img.freepik.com/premium-vector/high-end-threedimensional-technology-vector_1064626-180.jpg?ga=GA1.1.1039965199.1713434742&semt=ais_hybrid&w=740",
  },
  {
    instructor: "Yasharth Bhatt",
    title:"openAI Course",
    category: "openAI",
    duration: "150:00 Hours",
    date: "12 Jan 2025",
    price: "₹15,999",
    image: "https://img.freepik.com/free-vector/illustration-robot-vector-graphic_53876-17641.jpg?ga=GA1.1.1039965199.1713434742&semt=ais_hybrid&w=740",
  }
];

const CourseCard = ({ course, index }) => {
  return (
    <div
      className="relative bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white shadow-2xl shadow-blue-500/40 mt-6 mb-3 rounded-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105 "
      data-aos="flip-left"
      data-aos-delay={index * 100}
    >
      {/* Offer Badge */}
      <div className="absolute top-0 left-0 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-br-lg z-10">
        50% Offer
      </div>

      <img src={course.image} alt={course.title} className="w-full h-56 object-cover" />

      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">{course.title}</h3>
        <p className="text-sm">
          in <span className="text-blue-400 font-medium">{course.category}</span>
        </p>
        <div className="flex items-center justify-between text-xs text-gray-300">
          <p>{course.duration}</p>
          <p>{course.date}</p>
        </div>
        <p className="text-blue-300 font-bold text-xl">{course.price}</p>

        {/* Enroll Button */}
        <button className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-transform transform hover:scale-105">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

const Newstcourlist = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Newstcourlist;

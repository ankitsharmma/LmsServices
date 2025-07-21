import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const stats = [
  {
    icon: "https://iwaytrainings.com/assets/default/img/stats/teacher.svg",
    value: 5000,
    suffix: "+",
    label: "Students Trained",
    color: "from-blue-500 to-blue-400",
    cardColor: "bg-gradient-to-r from-blue-100 to-blue-50",
  },
  {
    icon: "https://iwaytrainings.com/assets/default/img/stats/student.svg",
    value: 93,
    suffix: "%",
    label: "Students Placed",
    color: "from-pink-500 to-purple-400",
    cardColor: "bg-gradient-to-r from-pink-100 to-purple-50",
  },
  {
    icon: "https://iwaytrainings.com/assets/default/img/stats/video.svg",
    value: 150,
    suffix: "+",
    label: "Hiring Partners",
    color: "from-green-500 to-green-400",
    cardColor: "bg-gradient-to-r from-green-100 to-green-50",
  },
  {
    icon: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTcnH3CouUTgJRifvgroGwmMfOUYzfvKIKclULhS0dV3ZK6YjFR",
    value: 500,
    suffix: "+",
    label: "Webinars Delivered",
    color: "from-red-500 to-orange-400",
    cardColor: "bg-gradient-to-r from-red-100 to-orange-50",
  },
];

const CounterStats = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const intervals = stats.map((stat, index) => {
      const step = Math.ceil(stat.value / 100);
      return setInterval(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < stat.value) {
            newCounts[index] = Math.min(newCounts[index] + step, stat.value);
          }
          return newCounts;
        });
      }, 20);
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6 bg-white">
      {stats.map((stat, index) => (
        <div
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 100}
          className={`flex flex-col items-center justify-center ${stat.cardColor} shadow-2xl rounded-2xl shadow-blue-500/50 p-6 w-64 transition-transform duration-300 hover:scale-105`}
        >
          <div
            className={`p-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center w-16 h-16`}
          >
            <img src={stat.icon} alt="icon" className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold mt-3">
            {counts[index]}
            {stat.suffix}
          </h3>
          <p className="text-gray-700">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default CounterStats;

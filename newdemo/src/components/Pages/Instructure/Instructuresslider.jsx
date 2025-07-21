import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Star } from "lucide-react";
import Ankit from "../../../assets/ankitp.jpg";
import Brijesh from "../../../assets/brijeshji.jpg";
import instructorbg from "../../../assets/instroctordot.png";

// Profile Data
const profiles = [
  {
    name: "Vinay Mishra",
    role: "IT Trainer, Coach and Consultant with 14+ YoE",
    image: "https://img.freepik.com/premium-photo/portrait-happy-young-business-man-standing-near-office-building-looking-camera-smiling_606562-1338.jpg?ga=GA1.1.1039965199.1713434742&semt=ais_hybrid&w=740",
    rating: 5,
  },
  {
    name: "Ankit singh",
    role: "Interview preparation, Soft Skill",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCQBA4tbzKgrT7b59t-kKMbNhlw-Tk1XUSDIoIA1fk_EqqhtHdod_unhrIXzEbYDr5cnmdng&s",
    rating: 4,
  },
  {
    name: "Sandeep Pandey",
    role: "A seasoned veteran in the software industry",
    image: "https://img.freepik.com/premium-photo/portrait-smiling-man-standing-beach-sunset_1048944-5354943.jpg?ga=GA1.1.1039965199.1713434742&semt=ais_hybrid&w=740",
    rating: 3,
  },
];

// Star Rating Component
const StarRating = ({ rating }) => {
  return (
    <div className="flex justify-center mt-2">
      {[...Array(5)].map((_, index) => (
        <span key={index} className="text-yellow-500">
          {index < rating ? <Star fill="currentColor" size={16} /> : <Star size={16} />}
        </span>
      ))}
    </div>
  );
};

// Profile Slider Component
const ProfileSlider = () => {
  return (
    <div
      className="w-full py-16 h-screen relative bg-cover shadow-1xl bg-fixed bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${instructorbg})`,
        // backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black opacity-40 z-0" /> */}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <Swiper
          spaceBetween={20}
          breakpoints={{
            1024: { slidesPerView: 3 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
        >
          {profiles.map((profile, index) => (
            <SwiperSlide key={index}>
              <div className="  rounded-3xl p-5 h-64 mb-10 mt-10 text-center hover:shadow-blue-200 transition duration-300">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-24 h-24 object-cover mx-auto rounded-full shadow-md"
                />
                <h3 className="text-lg font-semibold mt-3 text-gray-800">{profile.name}</h3>
                <p className="text-sm text-gray-600">{profile.role}</p>
                <StarRating rating={profile.rating} />
                <button className="mt-4 bg-blue-600 hover:bg-blue-700 transition-colors text-white py-2 px-4 rounded-lg text-sm">
                  Reserve a live meeting
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProfileSlider;

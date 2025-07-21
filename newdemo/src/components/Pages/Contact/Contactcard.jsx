import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactCards = () => {
  const cards = [
    {
      icon: <Phone className="text-white w-7 h-7" />,
      title: "Phone",
      value: "+91 8299408873 , 9161306023",
      gradient: "from-green-400 to-green-600",
    },
    {
      icon: <Mail className="text-white w-7 h-7" />,
      title: "Email",
      value: "support@company.com",
      gradient: "from-pink-500 to-red-400",
    },
    {
      icon: <MapPin className="text-white w-7 h-7" />,
      title: "Address",
      value: "373 Civil Linens , PW.D Guest House , Reliance Jio office Pratapgarh UP 23001 , India",
      gradient: "from-purple-500 to-indigo-500",
    },
  ];

  return (
    <div className="w-full px-4 py-10 flex flex-col items-center bg-white bg-fixed bg-cover bg-center">
      <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="relative group bg-white rounded-2xl shadow-2xl  shadow-blue-500/20 shadow-top-2xl p-6 overflow-hidden transition-transform hover:scale-[1.02]"
          >
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-100/30 to-blue-300/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

            {/* Content Layer */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className={`bg-gradient-to-br ${card.gradient} p-4 rounded-xl mb-4`}>
                {card.icon}
              </div>
              <h2 className="text-lg font-bold text-blue-900">{card.title}</h2>
              <p className="text-gray-500 mt-1">{card.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactCards;

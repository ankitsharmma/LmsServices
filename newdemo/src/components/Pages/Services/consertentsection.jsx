import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./customStyles.css"; // Tailwind 3D utilities
import {
  Search,
  Monitor,
  Palette,
  Code,
  Bug,
  UploadCloud,
} from "lucide-react"; // Lucide icons

export default function ConsultationSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const cards = [
    {
      title: "Analysis",
      icon: <Search size={40} />,
      description: "We dive deep into your data to find meaningful insights.",
    },
    {
      title: "Research",
      icon: <Monitor size={40} />,
      description: "We study your market and competitors for a strategic edge.",
    },
    {
      title: "Design",
      icon: <Palette size={40} />,
      description: "We create user-focused designs that drive engagement.",
    },
   {
    title: "Development",
    icon: <Code size={40} />,
    description: "We build robust solutions that meet your business needs.",
  },
  {
    title: "Testing",
    icon: <Bug size={40} />,
    description: "We ensure quality through rigorous testing and feedback.",
  },
  {
    title: "Deployment",
    icon: <UploadCloud size={40} />,
    description: "We launch your project with precision and care.",
  },
   
   
  ];

  return (
    <section className="bg-gradient-to-br from-orange-300 to-blue-200 py-16 mt-7">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 mt-7 mb-10" >
        {/* Left Image */}
        <div className="w-full lg:w-1/2 px-4" data-aos="fade-right">
          <img
            src="https://www.neksoftconsultancy.com/wp-content/uploads/2022/08/info-7.jpg"
            alt="Team collaboration"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left" data-aos="fade-top">
          <div className="text-sm uppercase font-semibold mb-2 text-gray-600">
            Our Approach <span className="ml-4 text-black">LET’S DISCUSS GROWTH!</span>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Our consultation is always in sync with your strategy
          </h2>
          <p className="text-lg text-gray-700 mb-10">
            How The Whole Team Gets Together To <strong>ENSURE YOUR SUCCESS</strong>
          </p>

          {/* Flip Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {cards.map((item, i) => (
              <div key={i} className="perspective" data-aos="zoom-in">
                <div className="relative w-full h-52 text-white transition-transform duration-700 transform-style preserve-3d hover:rotate-y-180 rounded-2xl">
                  {/* Front Side */}
                  <div className="absolute w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-2xl  shadow-blue-500/50 flex flex-col items-center justify-center backface-hidden">
                    <div className="mb-2">{item.icon}</div>
                    <div className="font-semibold text-lg">{item.title}</div>
                  </div>

                  {/* Back Side */}
                  <div className="absolute w-full h-full bg-blue-600 rounded-2xl shadow-2xl shadow-blue-500/50 flex items-center justify-center text-center px-4 rotate-y-180 backface-hidden">
                    <p className="text-md font-bold">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

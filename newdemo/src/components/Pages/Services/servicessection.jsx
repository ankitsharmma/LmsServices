import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Globe,
  BarChart2,
  Code,
  BookOpen,
  Users,
  Smartphone,
} from "lucide-react";

const services = [
  {
    title: "Website Solutions",
    description: "Your website is your digital storefront...",
    icon: <Globe className="text-white" size={32} />,
    link: "/services/website-solutions",
  },
  {
    title: "Digital Marketing",
    description: "Elevate your website’s ranking...",
    icon: <BarChart2 className="text-white" size={32} />,
    link: "/services/digital-marketing",
  },
  {
    title: "Software Development",
    description: "From concept to deployment...",
    icon: <Code className="text-white" size={32} />,
    link: "/services/software-development",
  },
  {
    title: "Skill Development",
    description: "We provide IT skill development training...",
    icon: <BookOpen className="text-white" size={32} />,
    link: "/services/skill-development",
  },
  {
    title: "Recruitment",
    description: "We are global IT recruitment provider...",
    icon: <Users className="text-white" size={32} />,
    link: "/services/recruitment",
  },
  {
    title: "Mobile Development",
    description: "Offering tailored mobile development services...",
    icon: <Smartphone className="text-white" size={32} />,
    link: "/services/mobile-development",
  },
];

export default function ServicesSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-gray-30 py-12 px-6 text-center">
      <div className="mb-30">
        <h4 className="text-blue-700 uppercase font-semibold tracking-wide text-l md:text-m mb-2">
          Our Services
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B0F29]">
          “Global Solutions, Local Expertise”
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            data-aos="flip-right"
            data-aos-delay={index * 100}
            className="bg-[#0B0F29] h-full text-white rounded-2xl shadow-2xl shadow-blue-500/80 p-6 mb-6 flex flex-col items-start gap-6 hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-blue-500 p-4 rounded-2xl">{service.icon}</div>
            <h3 className="text-2xl font-bold">{service.title}</h3>
            <p className="text-gray-300 text-base leading-relaxed">
              {service.description}
            </p>

         <a
  href={service.link}
  data-aos="zoom-in"
  className="mt-auto px-5 py-2 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:brightness-110 hover:scale-105 transition-all duration-300"
>
  Learn More
</a>

          </div>
        ))}
      </div>
    </section>
  );
}

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceCards = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const cards = [
    {
      title: "Affordable",
      text: "Your affordable partner for website solutions, digital marketing, social media, mobile apps, and SEO. Empowering your online growth without compromising quality.",
      image: "https://media.istockphoto.com/id/1399752372/photo/woman-watching-presentation-on-laptop.jpg?s=612x612&w=0&k=20&c=YCdlN38-rAXfMOp3XDCxtPZdBEYlarFMeizG1j3QWSc=", // replace with actual path
    },
    {
      title: "Professional",
      text: "SSl cloud services is a comprehensive digital solutions Agency. From web expertise and digital marketing to app development, we deliver professional results that empower your success.",
      image: "https://img.freepik.com/free-photo/young-businessman-sitting-office-working-laptop-while-drinking-coffee-there-are-people-background_637285-2.jpg?ga=GA1.1.1039965199.1713434742&semt=ais_hybrid&w=740",
    },
    {
      title: "Tech Partner",
      text: "Your round-the-clock tech partner. We offer seamless tech suggestions for your brand that will empower your digital journey 24/7.",
      image: "https://img.freepik.com/free-photo/futuristic-business-scene-with-ultra-modern-ambiance_23-2151003789.jpg?ga=GA1.1.1039965199.1713434742&semt=ais_hybrid&w=740",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 mt-10 px-4 py-10 ">
      {cards.map((card, index) => (
        <div
          key={index}
          className="relative w-full  h-86 max-w-sm rounded-2xl  overflow-hidden shadow-2xl shadow-blue-500/70 transition-transform duration-300 transform hover:scale-105 bg-gradient-to-t from-black/60 to-black/10 text-white"
          data-aos="fade-up"
          style={{
            backgroundImage: `url(${card.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="p-6 h-full flex flex-col justify-end bg-blue-900/46">
            <h2 className="text-3xl font-bold mb-4">{card.title}</h2>
            <p className="text-white text-lg font-semibold">{card.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;

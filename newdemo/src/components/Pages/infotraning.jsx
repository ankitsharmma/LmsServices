import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TrainingInfo = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="grid grid-cols-1 bg-gradient-to-br from-pink-200 to-blue-100  md:grid-cols-2 gap-8 p-6 mx-auto mt-10 mb-20">
      {/* Image Section */}
      <div>
        <img
          src="https://img.freepik.com/premium-photo/young-business-people-meeting-office-teamwork-group-whiteboard-presentation-seminar-man-businessman-startup-project-idea_565246-2475.jpg?ga=GA1.1.1039965199.1713434742&semt=ais_hybrid&w=740"
          alt="Training"
          className="w-full h-auto bg-blue-100 rounded-2xl shadow-2xl mt-20 mb-20 transition-transform duration-300 hover:scale-105"
          data-aos="fade-right"
        />
      </div>

      {/* Text Content Section */}
      <div 
         className="mt-20 mb-20 "
         data-aos="fade-down">
        <h2 className="text-3xl font-bold mb-4 text-black border-l-4 border-blue-600 pl-2">
          How We Work
        </h2>
        <p className="text-gray-600 mb-4 font-titillium text-md">
          At SL Cloud Services, we follow a structured, results-driven approach
          to deliver high-quality online training programs. Our process ensures
          that every learner gains in-depth knowledge, hands-on experience, and
          career-enhancing skills.
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Personalized Learning</h3>
            <p className="text-gray-700">
              We assess your skill level and career goals to recommend the
              right course.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Live Expert-Led Training</h3>
            <p className="text-gray-600">
              Industry professionals conduct interactive sessions with
              real-world case studies and practical exercises.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Hands-On Experience</h3>
            <p className="text-gray-600">
              Gain real-time project assignments and case studies to ensure
              applied learning.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Flexible Learning Options</h3>
            <p className="text-gray-600">
              Choose from instructor-led, self-paced, or corporate training
              programs based on your convenience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingInfo;

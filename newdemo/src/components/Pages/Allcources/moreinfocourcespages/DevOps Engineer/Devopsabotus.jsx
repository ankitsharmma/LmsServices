import React from "react";
import EventDetails from "../../../courcespages/Googlemaplocation";

const DevOpsCourse = () => {
  return (
    <>
     <div className=" mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col md:flex-row items-center">
        <img
          src="https://img.freepik.com/free-vector/devops-team-abstract-concept-vector-illustration-software-development-team-member-agile-workflow-devops-team-model-it-teamwork-project-management-integrated-practice-abstract-metaphor_335657-2299.jpg?ga=GA1.1.1039965199.1713434742&semt=ais_hybrid"
          alt="DevOps Course"
          className="w-full md:w-1/2  mb-4 md:mb-0"
        />
        <div className="md:ml-6 w-full md:w-1/2">
          <h2 className="text-xl font-bold text-gray-900 mb-4">About this course</h2>
          <h3 className="text-lg font-bold text-blue-700 mb-2">
            Launch your career in the high-demand field of DevOps!
          </h3>
          <p className="text-gray-700 mb-4">
            This comprehensive program is designed for aspiring professionals and
            college graduates seeking to master the art of automating and
            streamlining the software development lifecycle. Gain expertise in the
            core principles of DevOps, including continuous integration and
            continuous delivery (CI/CD), infrastructure as code (IaC), configuration
            management, containerization, and cloud technologies.
          </p>
          <h4 className="text-lg font-bold text-blue-700">Duration: 150 hours</h4>
          <h3 className="text-lg font-bold text-gray-800 mt-4">Benefits of Participant:</h3>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
            <li>
              <strong>Certificate of Completion:</strong> Showcase your new skills with an
              official internship certificate.
            </li>
            <li>
              <strong>Real-world Experience:</strong> Build your portfolio with two Capstone
              Projects worth INR 6000.
            </li>
            <li>
              <strong>Career Boost:</strong> Leverage 25+ professional Resume Templates to
              land your dream job.
            </li>
            <li>
              <strong>Cloud Credits:</strong> Explore the power of Microsoft Azure with your
              INR 8400 cloud voucher.
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-6 p-4 bg-white bg-opacity-100 shadow-md rounded-lg">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Text Course Specifications</h3>
        <div className="grid grid-cols-2 gap-4 text-gray-700">
          <div><strong>Capacity:</strong> 100 Students</div>
          <div><strong>Duration:</strong> 150 Hours</div>
          <div><strong>Students:</strong> 10</div>
          <div><strong>Text Lessons:</strong> 0</div>
          <div><strong>Files:</strong> 31</div>
          <div><strong>Created Date:</strong> 28 Jan 2025</div>
          <div><strong>Access Period:</strong> 365 Days</div>
        </div>
      </div>
    </div>
    <EventDetails/>
    </>
   
    
  );
};

export default DevOpsCourse;

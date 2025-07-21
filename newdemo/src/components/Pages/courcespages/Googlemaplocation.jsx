import React from "react";
import { Calendar, MapPin, Phone, Clock } from "lucide-react";

const EventDetails = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white p-6">
      {/* Event Details */}
      <div className="bg-white p-6 w-full md:w-1/2 ">
        <h2 className="text-2xl font-bold mb-4 text-blue-500" >SSL Cloud Solution Center</h2>

        <div className="flex items-center mb-4">
          <Calendar className="w-6 h-6 text-blue-500 mr-3" />
          <p>
            <strong>Open All Weekend</strong>
            <br />
            8:00 AM - 10:00 PM
          </p>
        </div>

        <div className="flex items-center mb-4">
          <MapPin className="w-6 h-6 text-red-500 mr-3" />
          <p>
            <strong>373 Civil Linens, PW.D Guest House</strong>
            <br />
            Reliance Jio Office, Pratapgarh, UP 23001, India
          </p>
        </div>

        <div className="flex items-center mb-4">
          <Phone className="w-6 h-6 text-green-500 mr-3" />
          <p>
            <strong>+91 8299408873</strong> / <strong>+91 9161306023</strong>
            <br />
            Phone Numbers
          </p>
        </div>

        <div className="flex items-center">
          <Clock className="w-6 h-6 text-purple-500 mr-3" />
          <p>
            <strong>Open All Weekend</strong>
            <br />
            8:00 AM - 10:00 PM
          </p>
        </div>
      </div>

      {/* Google Map Embed */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
        <div style={{ width: "100%" }}>
          <iframe
            title="Google Map"
            width="100%"
            height="400"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=540&amp;height=400&amp;hl=en&amp;q=Reliance%20Jio%20office%20Pratapgarh%20UP%2023001%20,%20India+(SSL%20Cloud%20Solution)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;

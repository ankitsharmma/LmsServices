import React, { useState } from "react";

export default function ContactForm() {
  const [contactdata, setContactdata] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactdata({
      ...contactdata,
      [name]: value,
    });
  };

  const handlecontact = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = contactdata;

    if (name && email && phone && message) {
      alert("Form submitted successfully");

      try {
        const Url = 'http://localhost:8080/auth/contact'; // Corrected 'localhost'
        const response = await fetch(Url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(contactdata),
        });

        const result = await response.json();
        console.log("Response:", result);

        // Optionally reset form
        setContactdata({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });

      } catch (error) {
        console.error("Error submitting contact form:", error);
        alert("There was an error submitting the form. Please try again.");
      }
    } else {
      alert("Please fill all required fields.");
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <form
        className="bg-white shadow-sm rounded-3xl p-8 w-full max-w-4xl space-y-6"
        onSubmit={handlecontact}
      >
        <h2 className="text-2xl font-bold text-center text-blue-900">
          Send your message directly
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            onChange={handleChange}
            value={contactdata.name}
            className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 hover:shadow-lg hover:scale-105 transform"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={contactdata.email}
            className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 hover:shadow-lg hover:scale-105 transform"
          />
          <input
            type="tel"
            placeholder="Phone"
            name="phone"
            onChange={handleChange}
            value={contactdata.phone}
            className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 hover:shadow-lg hover:scale-105 transform"
          />
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            onChange={handleChange}
            value={contactdata.subject}
            className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 hover:shadow-lg hover:scale-105 transform"
          />
        </div>

        <textarea
          placeholder="Message"
          rows="5"
          name="message"
          onChange={handleChange}
          value={contactdata.message}
          className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 hover:shadow-lg hover:scale-105 transform"
        ></textarea>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

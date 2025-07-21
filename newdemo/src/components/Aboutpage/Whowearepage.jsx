import React from 'react'

function Whowearepage() {
  return (
   <>
   
     {/* Who We Are Section */}
        <section className="py-16 bg-white rounded-lg shadow-md mx-4 my-8 md:mx-8 lg:mx-16"> {/* Removed data-aos */}
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-blue-700 mb-8">Who We Are</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div> {/* Removed data-aos */}
                <p className="text-lg leading-relaxed mb-4">
                  SSL CLOUD Solutions is a trusted IT services and training company with 7+ years of experience in DevOps, Cloud Computing, Automation, AI/ML, and IT Support. We help businesses automate their processes and enable individuals to build strong careers in the latest IT technologies.
                </p>
                <p className="text-lg leading-relaxed">
                  Founded by industry experts, we have grown into a leading technology partner in India, supporting diverse industries like IT, Automobile, Telecom, and Cloud Infrastructure. We are committed to providing practical learning experiences and cutting-edge automation solutions.
                </p>
              </div>
              <div className="flex justify-center"> {/* Removed data-aos */}
                <img
                  src="https://media.istockphoto.com/id/1346125184/photo/group-of-successful-multiethnic-business-team.jpg?s=612x612&w=0&k=20&c=5FHgRQZSZed536rHji6w8o5Hco9JVMRe8bpgTa69hE8="
                  alt="Our Team"
                  className="rounded-xl shadow-lg w-full max-w-md"
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/500x300/A7F3D0/065F46?text=Image+Not+Found'; }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Founder's Message Section */}
        <section className="py-16 bg-blue-50 rounded-lg shadow-md mx-4 my-8 md:mx-8 lg:mx-16"> {/* Removed data-aos and data-aos-delay */}
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-blue-700 mb-8">Founder’s Message</h2>
            <blockquote className="text-2xl italic text-gray-700 max-w-3xl mx-auto mb-6">
              "At SSL CLOUD Solutions, we believe that technology should empower every individual and organization. With the right skills and practical experience, anyone can build a successful career. Our goal is to create opportunities, drive automation, and deliver impactful solutions."
            </blockquote>
            <p className="text-xl font-semibold text-blue-600">- [Prasant Singh], Founder & CEO</p>
          </div>
        </section>

        {/* Core Services Section */}
        <section className="py-16 bg-white rounded-lg shadow-md mx-4 my-8 md:mx-8 lg:mx-16"> {/* Removed data-aos */}
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">Our Core Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "DevOps & Cloud Automation",
                  description: "End-to-end DevOps consulting, CI/CD pipeline setup, cloud deployments, and automation solutions.",
                  icon: (
                    <svg className="w-12 h-12 text-blue-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                  ),
                },
                {
                  title: "Automobile Sector Automation",
                  description: "Smart automation solutions for the automobile sector, optimizing processes and enhancing operations.",
                  icon: (
                    <svg className="w-12 h-12 text-blue-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h10M7 20h10M5 10a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-8z"></path>
                    </svg>
                  ),
                },
                {
                  title: "AI/ML Research & Development",
                  description: "Building innovative AI/ML models for business automation, predictive analysis, and smart systems.",
                  icon: (
                    <svg className="w-12 h-12 text-blue-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m7 0V5a2 2 0 012-2h2a2 2 0 012 2v6m-6 0H6"></path>
                    </svg>
                  ),
                },
                {
                  title: "Enterprise IT Support & Cloud Management",
                  description: "24/7 cloud infrastructure management and IT support for businesses of all sizes.",
                  icon: (
                    <svg className="w-12 h-12 text-blue-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path>
                    </svg>
                  ),
                },
                {
                  title: "Training & Placement",
                  description: "Industry-relevant training in DevOps, Cloud, Automation, AI/ML, and helping learners get placed in top tech companies.",
                  icon: (
                    <svg className="w-12 h-12 text-blue-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                  ),
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300"
                  // Removed data-aos and data-aos-delay
                >
                  <div className="flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Milestones Section */}
        <section className="py-16 bg-blue-50 rounded-lg shadow-md mx-4 my-8 md:mx-8 lg:mx-16"> {/* Removed data-aos */}
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">Company Milestones</h2>
            <div className="relative border-l-4 border-blue-500 pl-8">
              {[
                { year: "2018", description: "Founded with a vision to empower tech careers through real-world training." },
                { year: "2019", description: "Delivered automation solutions to leading automobile sector companies." },
                { year: "2020", description: "Expanded IT Support & Cloud Management services." },
                { year: "2021", description: "Initiated AI/ML research and development services." },
                { year: "2022", description: "Trained 2000+ professionals in DevOps and Cloud technologies." },
                { year: "2023", description: "Became a full-scale IT solutions and consulting provider." },
                { year: "2024", description: "Expanded automation projects in manufacturing industries." },
                { year: "2025", description: "Serving global clients in IT, Cloud, and Automation domains." },
              ].map((milestone, index) => (
                <div key={index} className="mb-8 last:mb-0"> {/* Removed data-aos and data-aos-delay */}
                  <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-1 border-2 border-white"></div>
                  <h3 className="text-2xl font-semibold text-blue-600 mb-2">{milestone.year}</h3>
                  <p className="text-gray-700 text-lg">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Clientele Section */}
        <section className="py-16 bg-white rounded-lg shadow-md mx-4 my-8 md:mx-8 lg:mx-16"> {/* Removed data-aos */}
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">Our Clientele</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "IT and Cloud Service Providers",
                "Automobile Manufacturing Companies",
                "Telecom Infrastructure Companies",
                "Retail & E-commerce Platforms",
                "Startups & Enterprises seeking automation",
                "Educational Institutions & Government IT projects",
              ].map((client, index) => (
                <div
                  key={index}
                  className=" bg-[#0B0F29] p-5 rounded-lg shadow-sm flex items-center justify-center text-center transform hover:scale-105 transition-transform duration-300"
                  // Removed data-aos and data-aos-delay
                >
                  <p className="text-lg font-medium text-gray-100">{client}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 bg-blue-50 rounded-lg shadow-md mx-4 my-8 md:mx-8 lg:mx-16"> {/* Removed data-aos */}
          <div className="container mx-auto px-4 ">
            <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">Our Values</h2>
            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Innovation",
                  description: "Constantly delivering modern, efficient, and scalable solutions.",
                  icon: (
                    <svg className="w-12 h-12 text-blue-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v14m-7 0h14a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  ),
                },
                {
                  title: "Integrity",
                  description: "Building trust through transparency and ethical practices.",
                  icon: (
                    <svg className="w-12 h-12 text-blue-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.001 12.001 0 002 12c0 2.757 1.25 5.232 3.25 6.917L12 22l6.75-3.083C20.75 17.232 22 14.757 22 12A12.001 12.001 0 0019.618 7.984z"></path>
                    </svg>
                  ),
                },
                {
                  title: "Excellence",
                  description: "Committed to delivering the best services and solutions.",
                  icon: (
                    <svg className="w-12 h-12 text-blue-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L12 21l-2.286-6.857L3 12l5.714-2.143L12 3z"></path>
                    </svg>
                  ),
                },
                {
                  title: "Empowerment",
                  description: "Equipping individuals and businesses with the power of technology.",
                  icon: (
                    <svg className="w-12 h-12 text-blue-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  ),
                },
                {
                  title: "Impact",
                  description: "Driving career growth and business transformation through IT.",
                  icon: (
                    <svg className="w-12 h-12 text-blue-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                    </svg>
                  ),
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-[#0B0F29] p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300"
                  // Removed data-aos and data-aos-delay
                >
                  <div className="flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-blue-100 mb-3">{value.title}</h3>
                  <p className="text-gray-200">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="py-16 bg-white rounded-lg shadow-md mx-4 my-8 md:mx-8 lg:mx-16"> {/* Removed data-aos */}
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">Vision & Mission</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-blue-50 p-8 rounded-lg shadow-md"> {/* Removed data-aos */}
                <h3 className="text-3xl font-semibold text-blue-600 mb-4 flex items-center">
                  <svg className="w-8 h-8 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4-4V3a1 1 0 00-1-1H3a1 1 0 00-1 1v14a1 1 0 001 1h12a1 1 0 001-1v-4l4-4v-3z"></path>
                  </svg>
                  Vision
                </h3>
                <p className="text-lg text-gray-700">
                  To be a global leader in DevOps, Cloud, and Automation, enabling innovation and creating skilled tech professionals.
                </p>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg shadow-md"> {/* Removed data-aos */}
                <h3 className="text-3xl font-semibold text-blue-600 mb-4 flex items-center">
                  <svg className="w-8 h-8 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                  Mission
                </h3>
                <p className="text-lg text-gray-700">
                  To deliver practical skills, enterprise solutions, and career-building opportunities in the IT & Cloud industry.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-blue-50 rounded-lg shadow-md mx-4 my-8 md:mx-8 lg:mx-16"> {/* Removed data-aos */}
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">Why Choose SSL CLOUD Solutions?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "7+ Years of Experience in IT Training & Solutions",
                "Certified & Industry-Experienced Instructors",
                "Hands-on Project-Based Learning",
                "Strong Placement Support with Industry Connects",
                "Comprehensive Cloud & Automation Solutions",
                "Trusted Partner of Multiple Enterprises & Startups",
              ].map((reason, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4 transform hover:scale-105 transition-transform duration-300"
                  // Removed data-aos and data-aos-delay
                >
                  <svg className="w-8 h-8 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <p className="text-lg text-gray-700">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        


   
   </>
  )
}

export default Whowearepage
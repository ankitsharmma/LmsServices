import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import kingpng from "../assets/kindpng.png";
// import { ToastContainer } from "react-toastify";
// import { handleError, handleSuccess } from "../components/utils";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo({ ...signupInfo, [name]: value });
  };

  // const handleSignup = async (e) => {
  //   e.preventDefault();

  //   const { name, email, phoneNumber, address, password, confirmPassword } = signupInfo;

  //   if (!name || !email || !phoneNumber || !address || !password || !confirmPassword) {
  //     return handleError("All fields are required");
  //   }

  //   if (password !== confirmPassword) {
  //     return handleError("Passwords do not match");
  //   }

  //   try {
  //     const url = `http://http://82.29.165.108:8080/auth/signup`;
  //     const response = await fetch(url, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(signupInfo)
  //     });

  //     const result = await response.json();
  //     const { success, message, jwtToken, name: userName, error } = result;

  //     if (success) {
  //       handleSuccess(message);
  //       localStorage.setItem("token", jwtToken);
  //       localStorage.setItem("loggedInUser", userName);
  //       setTimeout(() => navigate("/home"), 1000);
  //     } else if (error) {
  //       const details = error?.details?.[0]?.message || error;
  //       handleError(details);
  //     } else {
  //       handleError(message);
  //     }
  //   } catch (err) {
  //     handleError(err.message || "Network error");
  //   }
  // };

  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row">
        {/* Left Side - Form */}
        <div
          className="flex-1 flex flex-col justify-center items-center p-8 bg-white"
          data-aos="fade-right"
        >
          <h1 className="text-3xl font-bold mt-20 mb-2">✦ Sign Up</h1>

          <form onSubmit={handleSignup} className="w-full max-w-sm space-y-4">
            {/* Google Sign Up */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 px-4 py-2 mt-4 border rounded-md"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="h-5 w-5"
              />
              Sign up with Google
            </button>

            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-300" />
              <span className="px-2 text-gray-400 text-sm">OR</span>
              <div className="flex-grow border-t border-gray-300" />
            </div>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={signupInfo.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-purple-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={signupInfo.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-purple-300"
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={signupInfo.phoneNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-purple-300"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={signupInfo.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-purple-300"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={signupInfo.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-purple-300"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={signupInfo.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-purple-300"
            />

            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" required />
              I agree to all the{" "}
              <a href="#" className="text-blue-600">
                Terms
              </a>
              ,{" "}
              <a href="#" className="text-blue-600">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600">
                Fees
              </a>
              .
            </label>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700"
            >
              Continue
            </button>
          </form>
        </div>

        {/* Right Side - Full Image */}
        <div className="flex-1" data-aos="fade-left">
          <img
            src={kingpng}
            alt="Chart"
            className="w-full h-80 mt-20 md:h-full object-cover rounded-t-2xl md:rounded-tr-none md:rounded-bl-2xl"
          />
        </div>
      </div>
      {/* <ToastContainer /> */}
    </>
  );
};

export default SignUp;

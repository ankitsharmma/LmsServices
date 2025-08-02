import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import kingpng from "../assets/kindpng.png";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../components/utils";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: ""
  });
  
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, password } = loginInfo;

    if (!email || !password) {
      return handleError("Email and password are required");
    }

    try {
      const Url_Login = "/auth/login";
      const response = await fetch(  `${Url_Login}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginInfo)
      });

      const result = await response.json();
      const { success, message, jwtToken, name: userName, error } = result;

      if (success) {
        handleSuccess(message);
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("loggedInUser", userName);
        setTimeout(() => navigate("/dashboard"), 1000);
      } else if (error) {
        const details = error?.details?.[0]?.message || error;
        handleError(details);
      } else {
        handleError(message);
      }
    } catch (err) {
      handleError(err.message || "Network error");
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row">
        {/* Left Side - Form */}
        <div
          className="flex-1 flex flex-col justify-center items-center p-8 bg-white"
          data-aos="fade-right"
        >
          <h1 className="text-3xl font-bold mt-20 mb-2">✦ Login</h1>

          <form onSubmit={handleLogin} className="w-full max-w-sm space-y-4">
            {/* Google Login
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 px-4 py-2 mt-4 border rounded-md"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="h-5 w-5"
              />
              Login with Google
            </button>

            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-300" />
              <span className="px-2 text-gray-400 text-sm">OR</span>
              <div className="flex-grow border-t border-gray-300" />
            </div> */}

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={loginInfo.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-purple-300"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginInfo.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-purple-300"
            />

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700"
            >
              Login
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
      <ToastContainer />
    </>
  );
};

export default Login;

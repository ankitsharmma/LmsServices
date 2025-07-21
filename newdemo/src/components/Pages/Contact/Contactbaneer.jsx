import React, { useEffect, useRef } from "react";

const Contactbanner = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    const heading = headingRef.current;
    heading.classList.add("animate-slide-in");
  }, []);

  return (
    <div
      className="relative w-full h-[350px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://t4.ftcdn.net/jpg/04/16/03/41/240_F_416034117_YD5WFPRE7gpEBVW0XDrYkGeY1x7gLFqk.jpg')",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="relative text-center text-white">
        <h1
          ref={headingRef}
          className="text-3xl font-bold opacity-0"
          style={{
            animation: "slide-in 1s ease-out forwards",
          }}
        >
          Contact-us
        </h1>
      </div>

      <style>
        {`
          @keyframes slide-in {
            0% {
              transform: translateX(-100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Contactbanner;

import React, { useEffect, useState } from "react";

const TotalStudentBox = () => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.sslcloudservices.com/auth/user")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched students data:", data); // 👈 log here
        setCount(data.users ? data.users.length : 0);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching students:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="max-w-sm mx-auto bg-blue-600 text-white rounded-lg shadow p-6 text-center">
        <h2 className="text-lg">Total Student Registration</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <p className="text-4xl font-bold mt-2">{count}</p>
        )}
      </div>
    </div>
  );
};

export default TotalStudentBox;

import React, { useState, useEffect } from "react";

const videos = [
  { id: "HAAFTy_InWA", title: "Introduction Video" },
  { id: "kJQP7kiw5Fk", title: "Next Steps" },
  { id: "9bZkp7q19f0", title: "Advanced Tips" }
];

const Dashboard = () => {
  const [selectedVideo, setSelectedVideo] = useState(videos[0].id);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("http://localhost:8080/auth/login", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        });

        const data = await res.json();
        if (data.success) {
          setUserEmail(data.email || "Guest");
        } else {
          setUserEmail("Guest");
        }
      } catch (err) {
        setUserEmail("Guest");
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 mt-20 flex flex-col md:flex-row">
      {/* Sidebar with Video List */}
      <aside className="md:w-1/4 bg-white p-4 shadow-md">
        <h2 className="text-xl font-bold mb-2 text-purple-700">🎥 Video List</h2>
        <p className="mb-4 text-gray-600 text-sm">
          Logged in as: <span className="font-semibold">{userEmail}</span>
        </p>
        <ul className="space-y-2">
          {videos.map((video) => (
            <li
              key={video.id}
              onClick={() => setSelectedVideo(video.id)}
              className={`cursor-pointer p-2 rounded-md ${
                selectedVideo === video.id
                  ? "bg-purple-600 text-white"
                  : "hover:bg-purple-100"
              }`}
            >
              {video.title}
            </li>
          ))}
        </ul>
      </aside>

      {/* Video Player */}
      <main className="flex-1 p-4 flex justify-center items-center">
        <div className="w-full max-w-4xl aspect-video shadow-lg rounded-lg overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${selectedVideo}`}
            title="YouTube Video"
            className="w-full h-full"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

import React, { useState } from "react";
import Studentdetails from "./Admindashbordpages/Studentdetailspage";
import Studentdetailspage from "./Admindashbordpages/Studentdetailspage";
import StudentGraph from "./Admindashbordpages/Dashboardgraph";
import TotalStudentBox from "./Admindashbordpages/Dashboardgraph";

const DashboardAdmin = () => {
  const [active, setActive] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [filter, setFilter] = useState("");

  const [students, setStudents] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phoneNumber: "1234567890",
      address: "123 Main St",
      password: "******",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phoneNumber: "9876543210",
      address: "456 Park Ave",
      password: "******",
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice@example.com",
      phoneNumber: "5551234567",
      address: "789 Elm Rd",
      password: "******",
    },
  ]);

  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete?");
    if (confirmed) {
      setStudents(students.filter((student) => student.id !== id));
    }
  };

  const handleEdit = (id) => {
    alert(`Edit functionality for student ID: ${id}`);
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(filter.toLowerCase())
  );

  const renderContent = () => {
    switch (active) {
      case "dashboard":
        return <>
        {/* <StudentGraph/> */}
        <TotalStudentBox/>
        
        </>
      case "inbox":
        return <div className="p-6">📩 Inbox Content</div>;
      case "courses":
        return <div className="p-6">📚 Courses Details</div>;
      case "students":
         return <>
         <Studentdetailspage/>
         </>
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed md:static z-30 top-0 left-0 h-full w-64 bg-white shadow-lg transform md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4 text-xl font-bold text-blue-700 border-b">
          Admin Panel 
        </div>
        <nav className="flex flex-col space-y-2 p-4 text-gray-700">
          {[
            ["dashboard", "Dashboard"],
            ["inbox", "Inbox"],
            ["courses", "Courses"],
            ["students", "Students"],
          ].map(([key, label]) => (
            <button
              key={key}
              onClick={() => {
                setActive(key);
                setSidebarOpen(false);
              }}
              className={`text-left px-3 py-2 rounded ${
                active === key ? "bg-blue-100 text-blue-700" : ""
              }`}
            >
              {label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full">
        <header className="flex items-center justify-between bg-white p-4 shadow md:hidden">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-2xl"
          >
            ☰
          </button>
          <h1 className="text-lg font-bold">Admin Panel</h1>
        </header>

        <main className="flex-1 overflow-auto bg-white">{renderContent()}</main>
      </div>
    </div>
  );
};

export default DashboardAdmin;

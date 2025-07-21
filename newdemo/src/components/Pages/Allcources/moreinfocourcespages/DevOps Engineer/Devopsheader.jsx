import { useState } from "react";
import { ChevronDown, ChevronUp, Folder } from "lucide-react";

export default function CourseTabs() {
  const [activeTab, setActiveTab] = useState("Information");
  const [expandedModule, setExpandedModule] = useState(null);

  const courseModules = [
    {
      title: "Introduction to DevOps",
      parts: [
        { title: "Class 1: What is DevOps", description: "Introduction to DevOps concepts and principles." },
        { title: "Class 2: DevOps Lifecycle", description: "Understanding the phases of DevOps lifecycle." },
        { title: "Class 3: Key DevOps Tools", description: "Overview of essential DevOps tools like Git, Jenkins, and Docker." },
      ],
    },
    {
      title: "Version Control With GIT",
      parts: [
        { title: "Class 1: Git Basics", description: "Introduction to Git and basic commands." },
        { title: "Class 2: Git Branching", description: "Working with branches and merges in Git." },
      ],
    },
    {
      title: "Containerization With Docker",
      parts: [
        { title: "Class 1: Docker Basics", description: "Introduction to Docker and containerization." },
        { title: "Class 2: Docker Compose", description: "Managing multi-container applications with Docker Compose." },
      ],
    },
    {
      title: "Kubernetes",
      parts: [
        { title: "Class 1: Introduction to Kubernetes", description: "Understanding Kubernetes architecture and components." },
        { title: "Class 2: Deploying Applications", description: "How to deploy applications using Kubernetes." },
      ],
    },
    {
      title: "Azure DevOps",
      parts: [
        { title: "Class 1: Introduction to Azure DevOps", description: "Overview of Azure DevOps services." },
        { title: "Class 2: CI/CD Pipelines", description: "Creating and managing CI/CD pipelines." },
      ],
    },
    {
      title: "Monitoring and Logging",
      parts: [
        { title: "Class 1: Logging Best Practices", description: "How to implement effective logging." },
        { title: "Class 2: Monitoring Tools", description: "Introduction to monitoring tools like Prometheus and Grafana." },
      ],
    },
    {
      title: "DevSecOps",
      parts: [
        { title: "Class 1: Security in DevOps", description: "Understanding security principles in DevOps." },
        { title: "Class 2: Security Tools", description: "Introduction to security tools like SonarQube and Snyk." },
      ],
    },
    {
      title: "Advanced Terraform with Terragrunt",
      parts: [
        { title: "Class 1: Advanced Terraform", description: "Deep dive into Terraform configurations." },
        { title: "Class 2: Terragrunt Usage", description: "How to use Terragrunt to manage Terraform projects." },
      ],
    },
    {
      title: "Scripting",
      parts: [
        { title: "Class 1: Bash Scripting", description: "Writing and executing Bash scripts." },
        { title: "Class 2: Python for Automation", description: "Using Python for automation in DevOps." },
      ],
    },
    {
      title: "Advanced Topics",
      parts: [
        { title: "Class 1: Site Reliability Engineering (SRE)", description: "Understanding SRE principles." },
        { title: "Class 2: Infrastructure as Code (IaC)", description: "Using IaC for scalable infrastructure." },
      ],
    },
  ];

  const toggleModule = (index) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  const tabs = [
    { name: "Information" },
    { name: "Content", count: courseModules.length },
    { name: "Reviews", count: 0 },
  ];

  return (
    <div className="w-full  mx-auto mt-10 p-4">
      {/* Tabs */}
      <div className="flex border-b bg-blue-600  rounded-t-lg overflow-hidden">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`flex-1 py-3 text-center text-white font-medium transition duration-200 ${
              activeTab === tab.name ? "bg-blue-800" : "hover:bg-blue-700"
            }`}
          >
            {tab.name} {tab.count !== undefined && `(${tab.count})`}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-b-lg shadow p-5">
        {/* Information */}
        {activeTab === "Information" && (
          <>
            <h2 className="text-xl font-bold mb-4">What You Will Learn?</h2>
            <ul className="space-y-2">
              {courseModules.map((module, idx) => (
                <li key={idx} className="flex items-start text-gray-700">
                  <span className="text-green-600 mr-2 mt-1">✔</span>
                  <span>
                    <strong>Module {idx + 1}:</strong> {module.title}
                  </span>
                </li>
              ))}
            </ul>
          </>
        )}

        {/* Content */}
        {activeTab === "Content" && (
          <div className="space-y-4">
            {courseModules.map((module, idx) => (
              <div key={idx} className=" rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleModule(idx)}
                  className="w-full flex justify-between items-center bg-gray-100 px-4 py-3 text-left font-semibold hover:bg-gray-200"
                >
                  <div className="flex items-center">
                    <Folder className="text-blue-500 mr-3" size={20} />
                    {module.title}
                  </div>
                  {expandedModule === idx ? (
                    <ChevronUp className="text-blue-500" size={20} />
                  ) : (
                    <ChevronDown className="text-blue-500" size={20} />
                  )}
                </button>

                {expandedModule === idx && (
                  <div className="bg-blue-50 px-4 py-3 space-y-3">
                    {module.parts.map((part, i) => (
                      <div key={i} className="bg-white p-3 rounded shadow-sm">
                        <p className="font-medium text-gray-800">{part.title}</p>
                        <p className="text-gray-600 text-sm mt-1">{part.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Reviews */}
        {activeTab === "Reviews" && (
          <p className="text-gray-600 italic">No reviews available yet.</p>
        )}
      </div>
    </div>
  );
}

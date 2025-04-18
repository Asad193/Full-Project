// src/pages/About.jsx

import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 px-6 py-16">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10">
        <h1 className="text-4xl font-bold text-indigo-700 mb-6 text-center">
          About This Project
        </h1>

        <p className="text-lg text-gray-700 mb-6 text-center">
          Welcome to{" "}
          <span className="font-semibold text-indigo-600">Resume Scanner</span>{" "}
          — a smart AI-powered tool that helps job seekers analyze their resumes
          and discover matching job opportunities.
        </p>

        <p className="text-md text-gray-600 mb-4 leading-relaxed text-justify">
          This platform was created as part of the{" "}
          <strong>MCA Final Year Project</strong> and developed for the{" "}
          <strong>Non-Teaching Credit Course (NTCC)</strong> evaluation. It
          showcases the integration of modern web technologies and artificial
          intelligence in solving real-world problems like resume optimization
          and job matching.
        </p>

        <p className="text-md text-gray-600 mb-4 leading-relaxed text-justify">
          Built using the{" "}
          <span className="font-medium text-purple-600">MERN Stack</span>{" "}
          (MongoDB, Express.js, React.js, Node.js), the project features:
        </p>

        <ul className="list-disc list-inside text-gray-700 pl-4 mb-6">
          <li>Clean and responsive UI using Tailwind CSS</li>
          <li>AI-based resume scanning with smart insights</li>
          <li>Dynamic job recommendation interface</li>
          <li>Contact form with email integration</li>
        </ul>
      </div>
    </div>
  );
};

export default About;

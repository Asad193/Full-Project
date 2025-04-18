import React from "react";
import { useLocation } from "react-router-dom";

const ScanResults = () => {
  const location = useLocation();
  const resumeData = location.state?.resultData;

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Scan Results
      </h1>

      {/* 🔍 Extracted Resume Details */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-8 max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Extracted Resume Information
        </h2>
        <p>
          <strong>Name:</strong> {resumeData?.name || "Not Found"}
        </p>
        <p>
          <strong>Email:</strong> {resumeData?.email || "Not Found"}
        </p>
        <p>
          <strong>Phone:</strong> {resumeData?.phone || "Not Found"}
        </p>

        <h3 className="text-lg font-semibold text-gray-700 mt-4">Education</h3>
        <ul className="list-disc list-inside text-gray-600">
          {resumeData?.education?.map((edu, idx) => (
            <li key={idx}>{edu}</li>
          ))}
        </ul>

        <h3 className="text-lg font-semibold text-gray-700 mt-4">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {resumeData?.skills?.map((skill, idx) => (
            <span
              key={idx}
              className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        <h3 className="text-lg font-semibold text-gray-700 mt-4">Experience</h3>
        <ul className="list-disc list-inside text-gray-600">
          {resumeData?.experience?.map((exp, idx) => (
            <li key={idx}>{exp}</li>
          ))}
        </ul>
      </div>

      {/* 🎯 Resume Score */}
      <div className="bg-white shadow-lg rounded-xl p-6 mb-8 max-w-3xl mx-auto text-center">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Your Resume Score
        </h2>
        <p className="text-5xl font-bold text-indigo-600">
          {resumeData?.resumeScore || "Not Available"}%
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Based on readability, keywords, and format.
        </p>
      </div>

      {/* 📝 Suggestions for Improvement */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-8 max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Suggestions for Improvement
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          {resumeData?.suggestions?.map((suggestion, idx) => (
            <li key={idx}>{suggestion}</li>
          ))}
        </ul>
      </div>

      {/* 🔍 Job Matches */}
      <div className="bg-white shadow-md rounded-xl p-6 max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Job Matches for You
        </h2>
        <div className="space-y-4">
          {resumeData?.jobMatches?.map((job, idx) => (
            <a
              key={idx}
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-gray-200 rounded-lg p-4 hover:bg-indigo-50 transition duration-200"
            >
              <h3 className="text-lg font-semibold text-indigo-700">
                {job.title}
              </h3>
              <p className="text-gray-600">
                {job.company} - {job.location}
              </p>
              <p className="text-sm text-indigo-500 mt-1">View Job</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScanResults;

import React from "react";
import { Search, ScanLine, CheckCircle } from "lucide-react";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20 px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          AI-Powered Resume Scanner
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Instantly analyze your resume and get matched with the right jobs.
        </p>
        <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-indigo-100 transition">
          Get Started
        </button>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20 px-8 text-center">
        <div className="mt-10 p-4 bg-gray-100 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
              <Search size={40} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-medium mb-2">Upload Resume</h3>
              <p className="text-sm text-gray-600">
                Easily upload your resume in PDF or DOC format.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
              <ScanLine size={40} className="text-green-600 mb-4" />
              <h3 className="text-xl font-medium mb-2">AI Scan</h3>
              <p className="text-sm text-gray-600">
                Our AI scans your resume and extracts important info.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
              <CheckCircle size={40} className="text-purple-600 mb-4" />
              <h3 className="text-xl font-medium mb-2">Get Insights</h3>
              <p className="text-sm text-gray-600">
                Get suggestions, improvements, and job matches instantly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

import React from "react";
import {
  Search,
  ScanLine,
  CheckCircle,
  Briefcase,
  UserPlus,
  ChartPie,
} from "lucide-react";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-purple-800 text-white py-20 px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-light mb-4">
          Welcome to Your AI-Powered Job Portal
        </h1>
        <p className="text-lg md:text-xl font-light mb-6">
          Upload resumes, receive feedback, and find your dream job or ideal
          candidate in seconds!
        </p>
        <button className="bg-cyan-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-cyan-400 transition">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="bg-lightGray py-20 px-8 text-center">
        <div className="p-4 bg-white rounded-xl shadow-md">
          <h2 className="text-3xl font-light mb-6 text-darkGray">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center p-4 bg-lavender rounded-lg shadow hover:shadow-lg transition">
              <Briefcase size={40} className="text-indigo-700 mb-4" />
              <h3 className="text-xl font-medium mb-2 text-darkGray">
                Job Listings
              </h3>
              <p className="text-sm text-darkGray">
                Browse and filter thousands of job opportunities tailored to
                your skills.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center p-4 bg-lavender rounded-lg shadow hover:shadow-lg transition">
              <Search size={40} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-medium mb-2 text-darkGray">
                Resume Upload
              </h3>
              <p className="text-sm text-darkGray">
                Easily upload your resume in PDF or DOC format for instant
                analysis.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center p-4 bg-lavender rounded-lg shadow hover:shadow-lg transition">
              <ScanLine size={40} className="text-green-600 mb-4" />
              <h3 className="text-xl font-medium mb-2 text-darkGray">
                AI Resume Scanning
              </h3>
              <p className="text-sm text-darkGray">
                Get actionable insights and feedback to improve your resume.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center text-center p-4 bg-lavender rounded-lg shadow hover:shadow-lg transition">
              <UserPlus size={40} className="text-purple-700 mb-4" />
              <h3 className="text-xl font-medium mb-2 text-darkGray">
                Role-Based Registration
              </h3>
              <p className="text-sm text-darkGray">
                Sign up as a Job Seeker or a Job Provider for tailored
                experiences.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="flex flex-col items-center text-center p-4 bg-lavender rounded-lg shadow hover:shadow-lg transition">
              <ChartPie size={40} className="text-indigo-600 mb-4" />
              <h3 className="text-xl font-medium mb-2 text-darkGray">
                Job Matching
              </h3>
              <p className="text-sm text-darkGray">
                Match resumes with job descriptions using advanced AI
                algorithms.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="flex flex-col items-center text-center p-4 bg-lavender rounded-lg shadow hover:shadow-lg transition">
              <CheckCircle size={40} className="text-blue-700 mb-4" />
              <h3 className="text-xl font-medium mb-2 text-darkGray">
                Notifications
              </h3>
              <p className="text-sm text-darkGray">
                Receive updates and alerts for job applications or posted jobs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

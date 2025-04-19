import React from "react";
import { FileText, Briefcase, Bell } from "lucide-react";

const SeekerDashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-lightGray p-8">
      {/* Page Header */}
      <h1 className="text-3xl font-semibold text-indigo-700 mb-6 text-center">
        Job Seeker Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Resume Section */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FileText size={40} className="text-indigo-700 mx-auto mb-4" />
          <h2 className="text-xl font-medium text-darkGray mb-2">
            Your Resume
          </h2>
          <p className="text-sm text-gray-600">Upload or update your resume.</p>
          <button className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 transition">
            Upload Resume
          </button>
        </div>

        {/* Applied Jobs */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Briefcase size={40} className="text-blue-600 mx-auto mb-4" />
          <h2 className="text-xl font-medium text-darkGray mb-2">
            Applied Jobs
          </h2>
          <p className="text-sm text-gray-600">
            Track your application statuses.
          </p>
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition">
            View Applications
          </button>
        </div>

        {/* Notifications */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Bell size={40} className="text-purple-700 mx-auto mb-4" />
          <h2 className="text-xl font-medium text-darkGray mb-2">
            Notifications
          </h2>
          <p className="text-sm text-gray-600">Latest updates and alerts.</p>
          <button className="mt-4 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-500 transition">
            View Alerts
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeekerDashboard;

import React from "react";
import { PlusCircle, Users, Bell } from "lucide-react";

const ProviderDashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-lightGray p-8">
      {/* Page Header */}
      <h1 className="text-3xl font-semibold text-indigo-700 mb-6 text-center">
        Job Provider Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Manage Job Listings */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <PlusCircle size={40} className="text-indigo-700 mx-auto mb-4" />
          <h2 className="text-xl font-medium text-darkGray mb-2">Post a Job</h2>
          <p className="text-sm text-gray-600">
            Create new job listings and reach the right candidates.
          </p>
          <button className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 transition">
            Create Listing
          </button>
        </div>

        {/* Candidate Applications */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Users size={40} className="text-blue-600 mx-auto mb-4" />
          <h2 className="text-xl font-medium text-darkGray mb-2">
            Candidate Applications
          </h2>
          <p className="text-sm text-gray-600">
            Review resumes and filter applicants.
          </p>
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition">
            View Applicants
          </button>
        </div>

        {/* Notifications */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Bell size={40} className="text-purple-700 mx-auto mb-4" />
          <h2 className="text-xl font-medium text-darkGray mb-2">
            Notifications
          </h2>
          <p className="text-sm text-gray-600">
            Stay updated on applications and interviews.
          </p>
          <button className="mt-4 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-500 transition">
            View Alerts
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProviderDashboard;

import React, { useState } from "react";

const Register = () => {
  const [role, setRole] = useState("seeker");

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic here
    console.log("Form submitted", { role });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-lightGray">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        {/* Header */}
        <h2 className="text-2xl font-semibold text-center mb-6 text-indigo-700">
          Register to Get Started
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Role Selection */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-darkGray mb-2">
              Register As
            </label>
            <div className="flex items-center gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="seeker"
                  checked={role === "seeker"}
                  onChange={handleRoleChange}
                  className="text-indigo-600 focus:ring-indigo-500"
                />
                <span className="ml-2 text-sm text-gray-600">Job Seeker</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="provider"
                  checked={role === "provider"}
                  onChange={handleRoleChange}
                  className="text-indigo-600 focus:ring-indigo-500"
                />
                <span className="ml-2 text-sm text-gray-600">Job Provider</span>
              </label>
            </div>
          </div>

          {/* Name Input */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-darkGray mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-darkGray mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-darkGray mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-500 transition"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

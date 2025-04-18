import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [role, setRole] = useState(""); // Store selected role
  const navigate = useNavigate();
  const [isLoggingIn, setIsLoggingIn] = useState(false); // For loader animation

  const handleLogin = () => {
    if (!role) {
      alert("Please select a role to continue.");
      return;
    }
    setIsLoggingIn(true); // Start login animation
    setTimeout(() => {
      // Navigate after "loading" animation
      navigate(
        role === "job_seeker" ? "/dashboard/seeker" : "/dashboard/provider"
      );
    }, 2000); // Simulate loading time
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 relative overflow-hidden">
      {/* Floating Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-floating bg-white opacity-20 rounded-full h-48 w-48 -top-10 left-10 absolute"></div>
        <div className="animate-floating bg-white opacity-10 rounded-full h-32 w-32 top-32 right-16 absolute"></div>
        <div className="animate-floating bg-white opacity-15 rounded-full h-40 w-40 bottom-10 left-28 absolute"></div>
      </div>

      <div className="z-10 bg-white rounded-xl shadow-lg px-8 py-12 max-w-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Login</h1>
        {/* Role Selection */}
        <div className="flex justify-center space-x-6 mb-8">
          <div
            className={`cursor-pointer transition-transform transform ${
              role === "job_seeker"
                ? "scale-105 text-indigo-600"
                : "text-gray-500"
            }`}
            onClick={() => setRole("job_seeker")}
          >
            <div className="p-4 border rounded-full hover:border-indigo-600 hover:shadow-xl">
              Job Seeker
            </div>
          </div>
          <div
            className={`cursor-pointer transition-transform transform ${
              role === "job_provider"
                ? "scale-105 text-indigo-600"
                : "text-gray-500"
            }`}
            onClick={() => setRole("job_provider")}
          >
            <div className="p-4 border rounded-full hover:border-indigo-600 hover:shadow-xl">
              Job Provider
            </div>
          </div>
        </div>
        {/* Login Button */}
        <button
          onClick={handleLogin}
          className={`w-full px-6 py-2 text-white font-semibold rounded-md transition-transform transform hover:scale-105 ${
            isLoggingIn ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-800"
          }`}
          disabled={isLoggingIn}
        >
          {isLoggingIn ? (
            <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white inline-block"></div>
          ) : (
            "Login"
          )}
        </button>
      </div>
    </div>
  );
};

export default Login;

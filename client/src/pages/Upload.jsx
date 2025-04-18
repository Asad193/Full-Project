// src/pages/Upload.jsx

import React from "react";
import DragDropUpload from "../components/DragDropUpload";

const Upload = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 flex flex-col items-center justify-center px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
        Upload Your Resume
      </h1>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        Upload your resume in PDF or DOC format and let our AI do the magic ✨
      </p>

      <DragDropUpload />
    </div>
  );
};

export default Upload;

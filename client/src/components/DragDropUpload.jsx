import React, { useState, useRef, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DragDropUpload = () => {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleDragEvents = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragEnter = useCallback(
    (e) => {
      handleDragEvents(e);
      setIsDragging(true);
    },
    [handleDragEvents]
  );

  const handleDragLeave = useCallback(
    (e) => {
      handleDragEvents(e);
      setIsDragging(false);
    },
    [handleDragEvents]
  );

  const handleDrop = useCallback(
    (e) => {
      handleDragEvents(e);
      setIsDragging(false);
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        const droppedFile = e.dataTransfer.files[0];
        validateAndSetFile(droppedFile);
      }
    },
    [handleDragEvents]
  );

  const validateAndSetFile = useCallback((file) => {
    setError("");
    const validTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    const validExtensions = [".pdf", ".doc", ".docx"];
    const fileExtension = file.name
      .substring(file.name.lastIndexOf("."))
      .toLowerCase();

    if (
      !validTypes.includes(file.type) &&
      !validExtensions.includes(fileExtension)
    ) {
      setError("Please upload a PDF or Word document (PDF, DOC, DOCX)");
      return false;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("File size should be less than 5MB");
      return false;
    }

    setFile(file);
    return true;
  }, []);

  const handleFileSelect = useCallback(
    (e) => {
      if (e.target.files && e.target.files.length > 0) {
        validateAndSetFile(e.target.files[0]);
        e.target.value = "";
      }
    },
    [validateAndSetFile]
  );

  const handleUpload = useCallback(async () => {
    if (!file) {
      setError("Please select a file to upload");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    setIsUploading(true);
    setError("");
    setUploadProgress(0);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/upload-resume", // Fixed API endpoint
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            const progress = Math.round(
              (progressEvent.loaded / (progressEvent.total || 1)) * 100
            );
            setUploadProgress(progress);
          },
        }
      );

      console.log("Upload Response:", response.data);
      navigate("/ScanResult", { state: { resultData: response.data } });
    } catch (error) {
      console.error("Upload error:", error);
      setError(
        error.response?.data?.message ||
          error.message ||
          "Failed to upload file. Please try again."
      );
    } finally {
      setIsUploading(false);
    }
  }, [file, navigate]);

  const triggerFileInput = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const removeFile = useCallback((e) => {
    e.stopPropagation();
    setFile(null);
    setError("");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div
        className={`w-full max-w-md bg-white p-8 rounded-xl shadow-xl text-center transition-all duration-300 cursor-pointer ${
          isDragging
            ? "ring-4 ring-indigo-400 bg-indigo-50"
            : "border-2 border-dashed border-gray-300"
        }`}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={triggerFileInput}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-gray-700">
            Drag & drop your resume here or click to browse
          </p>
          <p className="text-sm text-gray-500">
            Supports: PDF, DOC, DOCX (Max 5MB)
          </p>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileSelect}
            accept=".pdf,.doc,.docx"
            className="hidden"
          />
        </div>
      </div>

      {error && (
        <p className="w-full max-w-md mt-2 text-red-500 text-sm font-medium text-center">
          {error}
        </p>
      )}

      {file && !isUploading && (
        <div className="mt-4 w-full max-w-md text-center text-sm text-gray-700">
          <p className="mb-2">
            <strong>Selected File:</strong> {file.name}
            <button
              className="ml-2 text-red-500 hover:text-red-700"
              onClick={removeFile}
            >
              ❌
            </button>
          </p>
        </div>
      )}

      {isUploading && (
        <div className="w-full max-w-md mt-4">
          <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-indigo-600 h-2.5 transition-all duration-300"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-1 text-center">
            Uploading... {uploadProgress}%
          </p>
        </div>
      )}

      {file && !isUploading && (
        <button
          className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition disabled:opacity-50 w-full max-w-md font-medium"
          onClick={handleUpload}
          disabled={isUploading}
        >
          Scan Resume
        </button>
      )}
    </div>
  );
};

export default DragDropUpload;

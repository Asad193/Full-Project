import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Upload from "../pages/Upload";
import Login from "../pages/Login";
import SeekerDashboard from "../pages/SeekerDashboard";
import DragDropUpload from "../components/DragDropUpload";
import ScanResult from "../pages/ScanResult";
import ProviderDashboard from "../pages/ProviderDashboard";
import Register from "../pages/Register";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/dashboard/seeker" element={<SeekerDashboard />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Login />} />
      <Route path="/dashboard/provider" element={<ProviderDashboard />} />

      <Route path="/drag-upload" element={<DragDropUpload />} />
      <Route path="/Scanresult" element={<ScanResult />} />
    </Routes>
  );
};

export default AppRoutes;

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./Config/db");

const uploadRoute = require("./Routes/Uploads");
const authRoutes = require("./Routes/authRoutes");
const jobRoutes = require("./Routes/jobRoutes");
const parsedResumeRoutes = require("./Routes/ParsedResume");





const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use("/api/upload-resume", uploadRoute);
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/parse-resume", parsedResumeRoutes); // ✅ Now it matches

// Health check
app.get("/ping", (req, res) => {
  res.send("Backend is up and running 🚀");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});

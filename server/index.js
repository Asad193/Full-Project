const express = require("express");
const mongoose = require("mongoose"); // Database connection
const cors = require("cors"); // For handling cross-origin requests
require("dotenv").config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allow frontend to connect
app.use(express.json()); // Parse JSON body in requests

// Import and use routes
const uploadRoute = require("./Routes/Uploads"); // Import upload route
app.use("/api/upload-resume", uploadRoute); // Register route with the desired path

// Test route
app.get("/ping", (req, res) => {
  res.send("Backend is up and running 🚀");
});

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/resumeScannerDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // Start the server after successful database connection
    app.listen(PORT, () => {
      console.log(`Server started at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

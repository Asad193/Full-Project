const express = require("express");
const multer = require("multer");
const pdfParse = require("pdf-parse");
const mammoth = require("mammoth");
const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");
const ParsedResume = require("../Models/ParsedResume"); // Import MongoDB model

const router = express.Router();

// Storage Configuration for Resume Uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, "../uploads");
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Resume Processing Route
router.post("/", upload.single("resume"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const filePath = req.file.path;
    let extractedText = "";

    // Extract text from PDF
    if (req.file.mimetype === "application/pdf") {
      const dataBuffer = fs.readFileSync(filePath);
      const data = await pdfParse(dataBuffer);
      extractedText = data.text;
    }
    // Extract text from DOCX
    else if (
      req.file.mimetype ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      const result = await mammoth.extractRawText({ path: filePath });
      extractedText = result.value;
    }
    // Unsupported formats
    else {
      return res.status(400).json({ message: "Unsupported file format" });
    }

    // Run spaCy resume parser via Python script
    const python = spawn("python", ["spacy_parser.py"]);

    let dataToSend = "";
    let errorOutput = "";

    python.stdout.on("data", (data) => {
      dataToSend += data.toString();
    });

    python.stderr.on("data", (data) => {
      errorOutput += data.toString();
    });

    python.on("close", async (code) => {
      if (code !== 0) {
        console.error("Python error:", errorOutput);
        return res.status(500).json({ message: "Error processing resume" });
      }

      try {
        const parsedData = JSON.parse(dataToSend); // Ensure JSON output is valid

        console.log("Parsed Resume Data Before Insert:", parsedData); // Debugging log

        // Save parsed resume data to MongoDB
        const newResume = await ParsedResume.create({
          name: parsedData.name || "Unknown",
          email: parsedData.email || "Not Provided",
          phone: parsedData.phone || "Not Provided",
          skills: parsedData.skills || [],
          experience: parsedData.experience || "Not Available",
          education: parsedData.education || "Not Available",
          uploadedBy: req.user?.userId, // Only store user ID if authenticated
        });

        console.log("Inserted Resume in MongoDB:", newResume); // Log successful insert

        res
          .status(200)
          .json({ message: "Resume parsed and stored !", resume: newResume });
      } catch (parseError) {
        console.error("JSON parse error:", parseError);
        res.status(500).json({ message: "Invalid response from Python" });
      }
    });

    python.stdin.write(extractedText);
    python.stdin.end();
  } catch (error) {
    console.error("Error parsing resume:", error);
    res.status(500).json({ message: "Failed to parse resume" });
  }
});

module.exports = router;

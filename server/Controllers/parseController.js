const { spawn } = require("child_process");

exports.parseResume = async (req, res) => {
  try {
    const { extractedText } = req.body; // Get resume text from request
    if (!extractedText)
      return res.status(400).json({ message: "Resume text required!" });

    const python = spawn("python", ["spacy_parser.py"]);
    let dataToSend = "",
      errorOutput = "";

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
        const parsedData = JSON.parse(dataToSend);
        res.status(200).json(parsedData);
      } catch (parseError) {
        console.error("JSON parse error:", parseError);
        res.status(500).json({ message: "Invalid response from Python" });
      }
    });

    python.stdin.write(extractedText);
    python.stdin.end();
  } catch (error) {
    console.error("Resume parsing error:", error);
    res.status(500).json({ message: "Failed to process resume" });
  }
};

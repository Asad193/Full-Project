const Job = require("../Models/Job");

// Create Job
exports.createJob = async (req, res) => {
  try {
    const { title, description, company, location } = req.body;
    const newJob = await Job.create({
      title,
      description,
      company,
      location,
      postedBy: req.user.userId,
    });
    res.status(201).json({ message: "Job posted successfully!", job: newJob });
  } catch (error) {
    res.status(500).json({ message: "Failed to post job", error });
  }
};

// Get Jobs
exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().populate("postedBy", "name email");
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch jobs", error });
  }
};

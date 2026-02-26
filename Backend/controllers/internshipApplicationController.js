import InternshipApplication from "../models/InternshipApplication.js";

export const getAllApplicationsForCoordinator = async (req, res) => {
  try {
    const applications = await InternshipApplication.find()
      .populate("student", "name email")
      .populate("advisor", "name")
      .populate("supervisor", "name")
      .sort({ createdAt: -1 });

    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
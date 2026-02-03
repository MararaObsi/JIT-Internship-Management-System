import mongoose from "mongoose";
import InternshipApplication from "../models/InternshipApplication.js";
import Student from "../models/Student.js";

/* ================= APPLY FOR INTERNSHIP ================= */
export const applyForInternship = async (req, res) => {
  try {
    const { internshipId, motivation, skills } = req.body;

    console.log("REQ BODY:", req.body);

    if (!internshipId) {
      return res.status(400).json({ message: "Internship ID is required" });
    }

    // find student profile using logged-in user
    const student = await Student.findOne({ userId: req.user.id });
    if (!student) {
      return res.status(404).json({ message: "Student profile not found" });
    }

    // Convert internshipId to ObjectId for proper comparison
    const internshipObjectId = new mongoose.Types.ObjectId(internshipId);

    // prevent duplicate applications
    const alreadyApplied = await InternshipApplication.findOne({
      student: student._id,
      internshipId: internshipObjectId,
    });

    if (alreadyApplied) {
      return res
        .status(400)
        .json({ message: "You already applied for this internship" });
    }

    // Create new application with optional fields
    const application = await InternshipApplication.create({
      student: student._id,
      internshipId: internshipObjectId,
      motivation,
      skills,
      report: req.file ? req.file.path : undefined,
    });

    res.status(201).json({
      message: "Internship applied successfully",
      application,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

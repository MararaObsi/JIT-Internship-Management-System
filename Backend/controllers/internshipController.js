import mongoose from "mongoose";
import InternshipApplication from "../models/InternshipApplication.js";
import Student from "../models/Student.js";
import Internship from "../models/Internship.js";

/* ================= APPLY FOR INTERNSHIP ================= */
export const applyForInternship = async (req, res) => {
  try {
    const { internshipId, motivation, skills } = req.body;

    if (!internshipId) {
      return res.status(400).json({ message: "Internship ID is required" });
    }

    // Find internship from collection
    const internship = await Internship.findById(internshipId);
    if (!internship) {
      return res.status(404).json({ message: "Internship not found" });
    }

    // Find student profile
    const student = await Student.findOne({ userId: req.user.id });
    if (!student) {
      return res.status(404).json({ message: "Student profile not found" });
    }

    // Prevent duplicate applications
    const alreadyApplied = await InternshipApplication.findOne({
      student: student._id,
      internshipId: internship._id,
    });

    if (alreadyApplied) {
      return res
        .status(400)
        .json({ message: "You already applied for this internship" });
    }

    // Save application
    const application = await InternshipApplication.create({
      student: student._id,
      internshipId: internship._id,
      companyName: internship.companyName,
      location: internship.location,
      motivation,
      skills,
      report: req.file ? req.file.path : undefined,
    });

    res.status(201).json({
      message: "Internship applied successfully",
      application,
    });
  } catch (error) {
    console.error("APPLY ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

/* ================= GET STUDENT APPLICATION STATUS ================= */
export const getMyInternshipStatus = async (req, res) => {
  try {
    const student = await Student.findOne({ userId: req.user.id });
    if (!student) {
      return res.status(404).json({ message: "Student profile not found" });
    }

    const application = await InternshipApplication.findOne({
      student: student._id,
    });

    if (!application) {
      return res
        .status(404)
        .json({ message: "No internship application found" });
    }

    res.status(200).json(application);
  } catch (error) {
    console.error("STATUS ERROR:", error);
    res.status(500).json({ message: "Failed to fetch internship status" });
  }
};

/* ================= GET ALL STUDENT APPLICATIONS ================= */
export const getMyInternshipStatuses = async (req, res) => {
  try {
    const student = await Student.findOne({ userId: req.user.id });
    if (!student)
      return res.status(404).json({ message: "Student profile not found" });

    const applications = await InternshipApplication.find({ student: student._id })
      .sort({ createdAt: -1 });

    res.status(200).json(applications);
  } catch (error) {
    console.error("STATUS ERROR:", error);
    res.status(500).json({ message: "Failed to fetch internship statuses" });
  }
};

/* ================= GET ALL INTERNSHIPS ================= */
export const getAllInternships = async (req, res) => {
  try {
    const internships = await Internship.find().sort({ createdAt: -1 });
    res.status(200).json(internships);
  } catch (error) {
    console.error("FETCH INTERNSHIPS ERROR:", error);
    res.status(500).json({ message: "Failed to fetch internships" });
  }
};

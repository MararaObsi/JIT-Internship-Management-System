import InternshipApplication from "../models/InternshipApplication.js";
import Evaluation from "../models/Evaluation.js";

/**
 * ===============================
 * GET ASSIGNED STUDENTS (Supervisor Dashboard)
 * ===============================
 */
export const getAssignedStudents = async (req, res) => {
  try {
    const applications = await InternshipApplication.find({
      status: { $regex: "^approved$", $options: "i" },
    })
      .populate({
        path: "student",
        populate: {
          path: "userId",
          select: "fullName email",
        },
      })
      .populate("internshipId", "companyName location");

    res.status(200).json(applications);
  } catch (error) {
    console.error("Assigned students error:", error);
    res.status(500).json({ message: "Failed to fetch students" });
  }
};

/**
 * ===============================
 * GET PENDING APPLICATIONS
 * ===============================
 */
export const getPendingApplications = async (req, res) => {
  try {
    const applications = await InternshipApplication.find({
      status: "pending",
    })
      .populate({
        path: "student",
        populate: { path: "userId", select: "fullName email" },
      })
      .populate("internshipId", "companyName location");

    res.json(applications);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch applications" });
  }
};

/**
 * ===============================
 * APPROVE / REJECT APPLICATION
 * ===============================
 */
export const decideApplication = async (req, res) => {
  try {
    const { applicationId, decision } = req.body;

    const application = await InternshipApplication.findById(applicationId);

    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    if (decision === "approved") {
      application.status = "approved";

      // ⭐ ASSIGN THIS SUPERVISOR
      application.supervisor = req.user._id;
    } else {
      application.status = "rejected";
    }

    await application.save();

    res.json({ message: "Decision saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Decision failed" });
  }
};

/**
 * ===============================
 * GET STUDENTS FOR EVALUATION
 * ===============================
 */
export const getStudentsForEvaluation = async (req, res) => {
  try {
    const applications = await InternshipApplication.find({
      status: { $regex: "^approved$", $options: "i" },
    })
      .populate({
        path: "student",
        populate: { path: "userId", select: "fullName email" },
      })
      .populate("internshipId", "companyName location");

    res.json(applications);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch students" });
  }
};


/**
 * ===============================
 * SUBMIT SUPERVISOR EVALUATION
 * ===============================
 */
export const submitEvaluation = async (req, res) => {
  try {
    const {
      studentId,
      internshipId,
      skills,
      report,
      behavior,
      overallPerformance,
    } = req.body;

    const evaluation = await Evaluation.create({
      student: studentId,
      internship: internshipId,
      supervisor: req.user._id, // ⭐ REQUIRED
      skills,
      report,
      behavior,
      overallPerformance,
    });

    res.json({ message: "Evaluation submitted", evaluation });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to submit evaluation" });
  }
};

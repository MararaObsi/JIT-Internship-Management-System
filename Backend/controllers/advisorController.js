import InternshipApplication from "../models/InternshipApplication.js";
import AdvisorEvaluation from "../models/AdvisorEvaluation.js";
import Attendance from "../models/attendance.js";


export const getAdvisorReports = async (req, res) => {
  try {
    const applications = await InternshipApplication.find({
      report: { $exists: true, $ne: "" }, 
      status: { $in: ["approved", "pending", "rejected"] },
    })
      .populate({
        path: "student",
        populate: {
          path: "userId",
          select: "fullName email",
        },
      })
      .populate("internshipId", "companyName location");

    
    const normalizedApps = applications.map((app) => ({
      ...app._doc,
      report: app.report ? app.report.replace(/\\/g, "/") : null,
    }));

    res.json(normalizedApps);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch advisor reports" });
  }
};


export const submitAdvisorEvaluation = async (req, res) => {
  try {
    const { applicationId, score, grade, feedback } = req.body;

    if (!applicationId || score === undefined || !grade || !feedback) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const application = await InternshipApplication.findById(applicationId);
    if (!application) {
      return res.status(404).json({ message: "Internship application not found" });
    }

    
    if (
      application.advisor &&
      application.advisor.toString() !== req.user._id.toString()
    ) {
      return res.status(403).json({ message: "Unauthorized evaluation attempt" });
    }

    
    const existingEvaluation = await AdvisorEvaluation.findOne({
      application: applicationId,
    });

    if (existingEvaluation) {
      return res
        .status(400)
        .json({ message: "Evaluation already submitted for this student" });
    }

    const evaluation = await AdvisorEvaluation.create({
      application: applicationId,
      advisor: req.user._id,
      score,
      grade,
      feedback,
    });

    res.status(201).json({
      message: "Evaluation submitted successfully",
      evaluation,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to submit evaluation" });
  }
};

export const getAdvisorStudents = async (req, res) => {
  try {
    const applications = await InternshipApplication.find({
      status: { $in: ["approved", "pending", "rejected"] },
    })
      .populate({
        path: "student",
        populate: {
          path: "userId",
          select: "fullName email",
        },
      })
      .populate("internshipId", "companyName location");

    res.json(applications);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch advisor students" });
  }
};

export const getAdvisorAttendance = async (req, res) => {
  try {
    console.log("===== DEBUG START =====");
    console.log("Advisor ID:", req.user._id);

    
    const applications = await InternshipApplication.find()
      .select("internshipId student");

    console.log("Applications found:", applications.length);

    
    const internshipIds = applications.map(app => app.internshipId);

    console.log("Internship IDs:", internshipIds);

   
    const records = await Attendance.find({
      internshipId: { $in: internshipIds }
    })
      .populate({
        path: "student",
        populate: {
          path: "userId",
          select: "fullName email"
        }
      })
      .populate("internshipId", "companyName");

    console.log("Attendance found:", records.length);
    console.log("===== DEBUG END =====");

    res.json(records);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch attendance" });
  }
};
import InternshipApplication from "../models/InternshipApplication.js";
import Attendance from "../models/attendance.js";

/**
 * Fetch approved students
 */
export const getAttendanceStudents = async (req, res) => {
  try {
    const applications = await InternshipApplication.find({
      status: { $regex: "^approved$", $options: "i" },
    })
      .populate({
        path: "student",
        populate: { path: "userId", select: "fullName email" },
      })
      .populate("internshipId", "companyName location");

    res.status(200).json(applications);
  } catch (error) {
    console.error("Fetch attendance students error:", error);
    res.status(500).json({ message: "Failed to fetch students" });
  }
};

/**
 * Mark attendance
 */
export const markAttendance = async (req, res) => {
  try {
    const { studentId, internshipId, date, status } = req.body;

    let attendance = await Attendance.findOne({
      student: studentId,
      internshipId: internshipId,
      date,
    });

    if (attendance) {
      attendance.status = status;
      await attendance.save();
    } else {
      attendance = await Attendance.create({
        student: studentId,
        internshipId: internshipId, // ✅ CORRECT FIELD NAME
        supervisor: req.user._id,
        date,
        status,
      });
    }

    res.json({ message: "Attendance saved successfully", attendance });
  } catch (error) {
    console.error("Mark attendance error:", error);
    res.status(500).json({ message: "Failed to mark attendance" });
  }
};

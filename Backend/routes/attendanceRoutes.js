import express from "express";
import { getAttendanceStudents, markAttendance } from "../controllers/attendanceController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/students", protect, getAttendanceStudents); // fetch all approved students
router.post("/mark", protect, markAttendance); // mark attendance

export default router;

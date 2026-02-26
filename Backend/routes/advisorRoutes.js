import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  getAdvisorAttendance,
  getAdvisorReports,
  submitAdvisorEvaluation,
  getAdvisorStudents,
} from "../controllers/advisorController.js";

const router = express.Router();


router.get("/students", protect, getAdvisorStudents);


router.get("/reports", protect, getAdvisorReports);


router.post("/evaluations", protect, submitAdvisorEvaluation);


router.get("/attendance", protect, getAdvisorAttendance);


export default router;

import express from "express";
import {
  getAssignedStudents,
  getPendingApplications,
  decideApplication,
  getStudentsForEvaluation,
  submitEvaluation,
} from "../controllers/supervisorController.js";

import { protect, authorize } from "../middleware/authMiddleware.js";

const router = express.Router();

// Assigned students
router.get("/students", protect, authorize("supervisor"), getAssignedStudents);

// Pending applications
router.get("/applications/pending", protect, authorize("supervisor"), getPendingApplications);

// FIXED ROUTE NAME
router.put("/applications/decide", protect, authorize("supervisor"), decideApplication);

// Students for evaluation
router.get("/evaluations/students", protect, authorize("supervisor"), getStudentsForEvaluation);

// FIXED ROUTE NAME
router.post("/evaluations/submit", protect, authorize("supervisor"), submitEvaluation);

export default router;

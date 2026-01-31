import express from "express";
import { getStudentProfile } from "../controllers/studentController.js";
import { protect, authorize } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get(
  "/profile",
  protect,
  authorize("student"),
  getStudentProfile
);

export default router;

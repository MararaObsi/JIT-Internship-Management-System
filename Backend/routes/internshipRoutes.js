import express from "express";
import multer from "multer";
import { protect } from "../middleware/authMiddleware.js";
import {
  applyForInternship,
  getMyInternshipStatus,
  getMyInternshipStatuses,
  getAllInternships,
} from "../controllers/internshipController.js";

const router = express.Router();

// Multer config for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// Routes
router.get("/", protect, getAllInternships); // fetch all internships
router.post("/apply", protect, upload.single("report"), applyForInternship);
router.get("/my-status", protect, getMyInternshipStatus);
router.get("/my-statuses", protect, getMyInternshipStatuses); // multiple applications

export default router;

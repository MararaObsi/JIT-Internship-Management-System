import express from "express";
import { getStudentProfile, updateStudentProfile } from "../controllers/studentController.js";
import { protect, authorize } from "../middleware/authMiddleware.js";
import multer from "multer";

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

router.get("/profile", protect, authorize("student"), getStudentProfile);

// ✅ Use multer single for profileImage
router.put("/profile", protect, authorize("student"), upload.single("profileImage"), updateStudentProfile);

export default router;

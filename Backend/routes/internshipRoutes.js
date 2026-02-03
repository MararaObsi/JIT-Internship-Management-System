import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { applyForInternship } from "../controllers/internshipController.js";
import multer from "multer";

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // make sure /uploads exists
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});
const upload = multer({ storage });

router.post("/apply", protect, upload.single("report"), applyForInternship);

export default router;

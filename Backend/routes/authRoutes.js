import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

// Use upload.single for profileImage
router.post("/register", upload.single("profileImage"), registerUser);
router.post("/login", loginUser);

export default router;

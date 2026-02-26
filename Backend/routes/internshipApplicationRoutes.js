import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { coordinatorOnly } from "../middleware/roleMiddleware.js";
import { getAllApplicationsForCoordinator } from "../controllers/internshipApplicationController.js";

const router = express.Router();

router.get(
  "/coordinator/all",
  protect,
  coordinatorOnly,
  getAllApplicationsForCoordinator
);

export default router;
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import cors from "cors";
import internshipRoutes from "./routes/internshipRoutes.js";
import supervisorRoutes from "./routes/supervisorRoutes.js";
import attendanceRoutes from "./routes/attendanceRoutes.js";
import advisorRoutes from "./routes/advisorRoutes.js";
import internshipApplicationRoutes from "./routes/internshipApplicationRoutes.js";


dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);
app.use("/uploads", express.static("uploads"));
app.use("/api/internships", internshipRoutes);
app.use("/api/supervisor", supervisorRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/advisor", advisorRoutes);
app.use("/api/applications", internshipApplicationRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));

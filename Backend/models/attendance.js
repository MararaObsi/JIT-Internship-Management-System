import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema(
  {
    student: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
    supervisor: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    internshipId: { type: mongoose.Schema.Types.ObjectId, ref: "Internship", required: true }, // ADD THIS
    date: { type: Date, required: true },
    status: { type: String, enum: ["present", "absent"], required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Attendance", attendanceSchema);

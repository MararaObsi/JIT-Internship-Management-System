import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  department: { type: String, required: true },
  studentId: { type: String, required: true, unique: true },
  eligibilityStatus: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model("Student", studentSchema);

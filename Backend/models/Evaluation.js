import mongoose from "mongoose";

const evaluationSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },
    internship: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Internship",
      required: true,
    },
    supervisor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    skills: { type: String, required: true },
    report: { type: String, required: true },
    behavior: { type: String },
    overallPerformance: {
      type: String,
      enum: ["Excellent", "Good", "Average", "Poor"],
      required: true,
    },
    submittedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model("Evaluation", evaluationSchema);

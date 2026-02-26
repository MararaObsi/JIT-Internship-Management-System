import mongoose from "mongoose";

const advisorEvaluationSchema = new mongoose.Schema(
  {
    application: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "InternshipApplication",
      required: true,
      unique: true,
    },
    advisor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    score: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },
    grade: {
      type: String,
      enum: ["A", "B", "C", "D", "F"],
      required: true,
    },
    feedback: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("AdvisorEvaluation", advisorEvaluationSchema);

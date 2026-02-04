import mongoose from "mongoose";

const internshipApplicationSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },
    internshipId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Internship",
      required: true,
    },
    companyName: {
      type: String,
      required: true, // snapshot
    },
    location: {
      type: String,
    },
    motivation: String,
    skills: String,
    report: String,
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model(
  "InternshipApplication",
  internshipApplicationSchema
);

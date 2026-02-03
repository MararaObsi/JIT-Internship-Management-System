import mongoose from "mongoose";

const internshipSchema = new mongoose.Schema(
  {
    companyName: { type: String, required: true },
    description: { type: String },
    location: { type: String },
    duration: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Internship", internshipSchema);

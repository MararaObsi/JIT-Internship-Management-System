import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    department: { type: String },
    studentId: { type: String },
    phone: { type: String },
    profileImage: { type: String }, // image URL
    eligibilityStatus: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("Student", studentSchema);

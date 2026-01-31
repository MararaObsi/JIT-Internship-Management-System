import Student from "../models/Student.js";

export const getStudentProfile = async (req, res) => {
  const student = await Student.findOne({ userId: req.user.id });
  if (!student) {
    return res.status(404).json({ message: "Student profile not found" });
  }
  res.json(student);
};

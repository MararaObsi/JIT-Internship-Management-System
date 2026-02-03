import Student from "../models/Student.js";
import User from "../models/User.js";

// GET student profile
export const getStudentProfile = async (req, res) => {
  try {
    // Populate user fields (fullName, email)
    const student = await Student.findOne({ userId: req.user.id }).populate("userId", "fullName email");
    if (!student) return res.status(404).json({ message: "Student profile not found" });

    // Merge student + user info
    const profile = {
      _id: student._id,
      department: student.department,
      studentId: student.studentId,
      phone: student.phone,
      profileImage: student.profileImage,
      eligibilityStatus: student.eligibilityStatus,
      fullName: student.userId.fullName,
      email: student.userId.email,
    };

    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PUT update student profile
export const updateStudentProfile = async (req, res) => {
  try {
    console.log("req.body:", req.body); // debug
    console.log("req.file:", req.file); // debug

    const student = await Student.findOne({ userId: req.user.id });
    if (!student) return res.status(404).json({ message: "Student profile not found" });

    // Use req.body safely
    student.department = req.body.department || student.department;
    student.phone = req.body.phone || student.phone;
    if (req.file) {
      student.profileImage = `/uploads/${req.file.filename}`;
    }
    await student.save();

    const user = await User.findById(req.user.id);
    user.fullName = req.body.fullName || user.fullName;
    user.email = req.body.email || user.email;
    await user.save();

    res.json({
      _id: student._id,
      department: student.department,
      studentId: student.studentId,
      phone: student.phone,
      profileImage: student.profileImage,
      eligibilityStatus: student.eligibilityStatus,
      fullName: user.fullName,
      email: user.email,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

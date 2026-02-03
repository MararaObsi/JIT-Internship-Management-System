import User from "../models/User.js";
import Student from "../models/Student.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

/* ---------------- REGISTER ---------------- */
export const registerUser = async (req, res) => {
  try {
    const { fullName, email, password, department, phone } = req.body;

    if (!fullName || !email) {
      return res.status(400).json({ message: "Full name and email are required" });
    }

    // Generate username and system password if password is not provided
    const username = fullName.toLowerCase().replace(/\s+/g, ".").replace(/[^a-z.]/g, "");
    const systemPassword = password || fullName.split(" ")[0].substring(0, 2).toUpperCase() + Math.floor(1000 + Math.random() * 9000);
    const hashedPassword = await bcrypt.hash(systemPassword, 10);

    // Create user
    const user = await User.create({
      fullName,
      email,
      username,
      password: hashedPassword,
      role: "student",
    });

    // Create student profile
    await Student.create({
      userId: user._id,
      department: department || "Not Assigned",
      studentId: "TEMP-" + user._id.toString().slice(-6),
      phone: phone || "",
      profileImage: req.file ? `/uploads/${req.file.filename}` : "",
    });

    // Send credentials via email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"JIT Internship System" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your JIT Internship System Login Credentials",
      html: `
        <h2>Welcome to JIT Internship Management System</h2>
        <p><strong>Username:</strong> ${username}</p>
        <p><strong>Password:</strong> ${systemPassword}</p>
        <p>Please login and change your password.</p>
      `,
    });

    res.status(201).json({ message: "Registration successful. Check your email." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

/* ---------------- LOGIN ---------------- */
export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET || "jit_secret",
      { expiresIn: "1d" }
    );

    res.json({
      token,
      role: user.role,
      username: user.username,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

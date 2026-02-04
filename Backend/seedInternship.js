import mongoose from "mongoose";
import dotenv from "dotenv";
import Internship from "./models/Internship.js";

dotenv.config();

const internships = [
  { companyName: "Ethio Telecom", location: "Addis Ababa", description: "Telecom & IT", duration: "3 months" },
  { companyName: "CBE", location: "Addis Ababa", description: "Banking & Finance", duration: "3 months" },
  { companyName: "Ethiopian Airlines", location: "Addis Ababa", description: "Aviation & Engineering", duration: "3 months" },
  { companyName: "INSA", location: "Addis Ababa", description: "Cyber Security", duration: "3 months" },
  { companyName: "Ethio Engineering", location: "Addis Ababa", description: "Engineering", duration: "3 months" },
  { companyName: "Ministry of Innovation & Technology", location: "Addis Ababa", description: "Technology & Research", duration: "3 months" },
  { companyName: "ERA", location: "Addis Ababa", description: "Civil Engineering", duration: "3 months" },
  { companyName: "Ethio ICT Village", location: "Addis Ababa", description: "Software & ICT", duration: "3 months" },
  { companyName: "Dashen Bank", location: "Addis Ababa", description: "Banking & IT", duration: "3 months" },
  { companyName: "Horizon Addis Tech Hub", location: "Addis Ababa", description: "Startup & Software", duration: "3 months" },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    await Internship.deleteMany({});
    await Internship.insertMany(internships);

    console.log("✅ Internships seeded successfully!");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDB();

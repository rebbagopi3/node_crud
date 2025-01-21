import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, default: "0000000000" },
  branch: { type: String, required: true },
  date: { type: Number, required: true },
});

const studentModel = mongoose.models.student || mongoose.model("student", studentSchema);

export default studentModel;

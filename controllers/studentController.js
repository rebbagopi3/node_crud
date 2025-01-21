import studentModel from "../models/studentModel.js";

// Create a new student
export const createStudent = async (req, res) => {
  try {
    const student = new studentModel(req.body);
    const savedStudent = await student.save();
    res.status(201).json(savedStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all students
export const getAllStudents = async (req, res) => {
  try {
    const students = await studentModel.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a student by ID
export const getStudentById = async (req, res) => {
  try {
    const student = await studentModel.findById(req.params.id);
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a student
export const updateStudent = async (req, res) => {
  try {
    const updatedStudent = await studentModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedStudent) return res.status(404).json({ message: "Student not found" });
    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a student
export const deleteStudent = async (req, res) => {
  try {
    const deletedStudent = await studentModel.findByIdAndDelete(req.params.id);
    if (!deletedStudent) return res.status(404).json({ message: "Student not found" });
    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

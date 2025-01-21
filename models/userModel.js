import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    createddate:{type: Number, required:true},
    updateddate: { type: Number, required: true },
  }
)

const userModel =
  mongoose.model.user || mongoose.model("user", userSchema);

//if model is available use this

//mongoose.model.student

export default userModel
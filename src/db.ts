import { model, Schema } from "mongoose";

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
    required: true,
  },

  city: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    enum: ["USER", "DOCTOR"],
    default: "USER",
  },

  // 👇 Only for doctors
  yearOfExperience: {
    type: Number,
    required: function () {
      return this.role === "DOCTOR";
    },
  },

  gender: {
    type: String,
    enum: ["MALE", "FEMALE", "OTHER"],
    required: function () {
      return this.role === "DOCTOR";
    },
  },
  specialist: {
    type: String,
    enum: [
      "CARDIOLOGIST",
      "DERMATOLOGIST",
      "NEUROLOGIST",
      "PSYCHIATRIST",
      "GENERAL_PHYSICIAN",
      "ORTHOPEDIC",
    ],
    required: function () {
      return this.role === "DOCTOR";
    },
  },
});

export const userModel = model("users", userSchema);

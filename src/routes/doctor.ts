import "dotenv/config";
import { Request, Response } from "express";
import { z } from "zod";
import { userModel } from "../db";
import { hash } from "bcrypt-ts";

const DOCTOR_SECRET = process.env.DOCTOR_SECRET;
const docSignupSchema = z.object({
  email: z.email(),
  password: z.string().min(6),
  firstName: z.string(),
  lastName: z.string(),
  age: z.coerce.number().min(18).max(120),
  yearOfExperience: z.coerce.number().min(0),
  gender: z.enum(["MALE", "FEMALE", "OTHER"]),
  city: z
    .string()
    .min(3)
    .trim()
    .transform((val) => val.toLowerCase()),
  specialist: z.enum([
    "CARDIOLOGIST",
    "DERMATOLOGIST",
    "NEUROLOGIST",
    "PSYCHIATRIST",
    "GENERAL_PHYSICIAN",
    "ORTHOPEDIC",
  ]),
});

export const docSignup = async (req: Request, res: Response) => {
  const { secret } = req.body;
  if (secret !== DOCTOR_SECRET) {
    return res.status(403).json({
      message: "Unauthorized Access",
    });
  }

  const result = docSignupSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      msg: "Invalid Input",
      errors: result.error.issues,
    });
  }

  const existUser = await userModel.findOne({
    email: result.data.email.toLowerCase(),
  });

  if (existUser) {
    return res.status(409).json({
      msg: "User already exists",
    });
  }

  const hashPass = await hash(result.data.password, 10);
  try {
    await userModel.create({
      email: result.data.email.toLowerCase().trim(),
      password: hashPass,
      firstName: result.data.firstName,
      lastName: result.data.lastName,
      role: "DOCTOR",
      age: result.data.age,
      gender: result.data.gender,
      yearOfExperience: result.data.yearOfExperience,
      city: result.data.city,
      specialist: result.data.specialist,
    });
    return res.status(201).json({
      msg: "Doctor registered successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Server Error",
    });
  }
};

export const docVerify = async (req: Request, res: Response) => {
  const { secret } = req.body;
  if (secret !== DOCTOR_SECRET) {
    return res.status(403).json({ message: "Invalid secret code" });
  }

  return res.status(200).json({ message: "Verified" });
};

export const getUserStats = async (req: Request, res: Response) => {
  try {
    const totalPatients = await userModel.countDocuments({
      role: "USER",
    });

    const users = await userModel
      .find({ role: "USER" })
      .select("firstName lastName age city");

    return res.status(200).json({
      totalPatients,
      users,
    });
  } catch (error) {
    console.error("Dashboard Error:", error);
    return res.status(500).json({ msg: "Server Error" });
  }
};

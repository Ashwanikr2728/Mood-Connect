import "dotenv/config";
import { Request, Response } from "express";
import { userModel } from "../db";
import { z } from "zod";
import { compare, hash } from "bcrypt-ts";
import jwt from "jsonwebtoken";

const USER_SECRET = process.env.USER_JWT_SECRET;

const signupSchema = z.object({
  email: z.string().min(3).trim(),
  password: z.string().min(8, "Password must be at least 8 characters"),
  firstName: z.string(),
  lastName: z.string(),
  age: z.coerce.number().min(1).max(120),
  city: z
    .string()
    .trim()
    .min(3)
    .transform((val) => val.toLowerCase()),
});

const signinSchema = z.object({
  email: z.string().min(3).trim(),
  password: z.string().min(1),
});

export const userSignup = async (req: Request, res: Response) => {
  const result = signupSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      msg: "Invalid Input",
      errors: result.error.issues,
    });
  }

  const isExistUser = await userModel.findOne({
    email: result.data.email.toLowerCase(),
  });
  if (isExistUser) {
    return res.status(409).json({
      msg: "User already exists",
    });
  }

  const hashedPassword = await hash(result.data.password, 10);

  try {
    await userModel.create({
      email: result.data.email.toLowerCase(),
      password: hashedPassword,
      firstName: result.data.firstName,
      lastName: result.data.lastName,
      age: result.data.age,
      city: result.data.city,
    });
    res.status(201).json({ msg: "signup successfull" });
  } catch (error) {
    return res.status(500).json({
      msg: "Server Error",
    });
  }
};

export const userSignin = async (req: Request, res: Response) => {
  const result = signinSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      msg: "Invalid Input",
    });
  }

  const email = result.data.email.toLowerCase();
  const password = result.data.password;

  const user = await userModel.findOne({
    email,
  });

  if (!user || !user.password) {
    return res.status(401).json({
      msg: "Invalid Credentials",
    });
  }

  const isMatch = await compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ msg: "Invalid credentials" });
  }

  const token = jwt.sign(
    {
      userId: user.id,
      role: user.role,
    },
    USER_SECRET,
  );
  return res.status(200).json({
    token,
    role: user.role,
    msg: "Sigin successfull",
  });
};

export const me = async (req: Request, res: Response) => {
  try {
    const response = await userModel.findById((req as any).user.userId);
    res.json({
      firstName: response?.firstName,
      lastName: response?.lastName,
      age: response?.age,
      city: response?.city,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getDocStats = async (req: Request, res: Response) => {
  try {
    const doctors = await userModel
      .find({
        role: "DOCTOR",
      })
      .select("firstName lastName city specialist");
    return res.status(200).json({
      doctors,
    });
  } catch (error) {
    console.log("Error while fetching doctors list", error);
    return res.status(500).json({
      msg: "Sever error",
    });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const updatedUser = await userModel.findByIdAndUpdate(
      (req as any).user.userId,
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        city: req.body.city,
      },
      { returnDocument: "after" },
    );
    return res.status(200).json({
      updatedUser,
      msg: "Profile updated successfully",
    });
  } catch (error) {
    console.log("Error while updating profile");
    return res.status(500).json({
      msg: "Server Error",
    });
  }
};

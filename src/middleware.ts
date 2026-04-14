import "dotenv/config";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const USER_SECRET = process.env.USER_JWT_SECRET;

export const userMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const header = req.headers.authorization;
  const decoded = jwt.verify(header as string, USER_SECRET);
  if (decoded) {
    //@ts-ignore
    req.user = decoded;
    next();
  } else {
    res.status(403).json({
      msg: "You are not logged in",
    });
  }
};

export const doctorMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  //@ts-ignore
  if (!req.user) {
    return res.status(401).json({ msg: "Unauthorized" });
  }
  //@ts-ignore
  if (req.user.role !== "DOCTOR") {
    return res.status(403).json({ msg: "Access denied" });
  }

  next();
};

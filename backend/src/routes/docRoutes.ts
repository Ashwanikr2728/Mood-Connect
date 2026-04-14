import express from "express";
import { docSignup, docVerify, getUserStats } from "./doctor";
import { doctorMiddleware, userMiddleware } from "../middleware";

const router = express.Router();

router.post("/signup", docSignup);
router.post("/verify", docVerify);
router.get("/dashboard", userMiddleware, doctorMiddleware, getUserStats);

export default router;

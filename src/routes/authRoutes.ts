import express from "express";
import { getDocStats, me, updateUser, userSignin, userSignup } from "./user";
import { userMiddleware } from "../middleware";

const router = express.Router();

router.post("/signup", userSignup);
router.post("/signin", userSignin);
router.get("/me", userMiddleware, me);
router.patch("/update", userMiddleware, updateUser);
router.get("/dashboard", userMiddleware, getDocStats);

export default router;

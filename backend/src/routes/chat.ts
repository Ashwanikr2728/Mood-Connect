import express from "express";
import { handleChat } from "../utils";

const router = express.Router();

router.post("/", handleChat);

export default router;

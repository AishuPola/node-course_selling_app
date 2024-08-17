import express from "express";
import {
  courses,
  createUserctr,
  loginUserctr,
} from "../controllers/user.controller.js";
const router = express.Router();

router.post("/signup", createUserctr);
router.post("/login", loginUserctr);
router.get("/courses", courses);
export default router;

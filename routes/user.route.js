import express from "express";
import {
  getcoursesctr,
  createUserctr,
  loginUserctr,
} from "../controllers/user.controller.js";
const router = express.Router();

router.post("/signup", createUserctr);
router.post("/login", loginUserctr);
router.get("/courses", getcoursesctr);
export default router;

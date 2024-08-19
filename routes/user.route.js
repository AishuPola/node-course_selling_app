import express from "express";
import {
  getcoursesctr,
  createUserctr,
  loginUserctr,
  getCourseByIdCtrl,
} from "../controllers/user.controller.js";
const router = express.Router();

router.post("/signup", createUserctr);
router.post("/login", loginUserctr);
router.get("/courses", getcoursesctr);
router.get("/courses/:id", getCourseByIdCtrl);
export default router;

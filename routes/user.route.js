import express from "express";
import {
  getcoursesctr,
  createUserctr,
  loginUserctr,
  getCourseByIdCtrl,
  getUser,
} from "../controllers/user.controller.js";
import { auth } from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/signup", createUserctr);
router.post("/login", loginUserctr);
router.get("/always", auth, getUser);
router.get("/courses", getcoursesctr);
// router.get("/courses/:id", getCourseByIdCtrl);
export default router;

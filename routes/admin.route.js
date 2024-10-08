import express from "express";
import {
  createAdminctr,
  loginAdminctr,
  getUser,
  getCourseByIdCtrl,
  deleteCourseByIdCtrl,
  editCoursesByIdctrl,
} from "../controllers/admin.controller.js";
import { addCourseCtr } from "../controllers/addcourse.controller.js";
import { auth } from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/signup", createAdminctr);
router.post("/login", loginAdminctr);
router.post("/addcourse", auth, addCourseCtr);
router.get("/always", auth, getUser);
router.get("/course/:id", auth, getCourseByIdCtrl);
router.delete("/course/:id", auth, deleteCourseByIdCtrl);
router.put("/course/:id", auth, editCoursesByIdctrl);

export default router;

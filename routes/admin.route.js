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

// router.get("/courses", getCoursesCtrl);
router.get("/courses/:id", getCourseByIdCtrl);
router.delete("/courses/:id", deleteCourseByIdCtrl);
router.put("/courses/:id", editCoursesByIdctrl);

export default router;

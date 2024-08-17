import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getCoursesbycoursename } from "../services/course.service.js";
export async function addCourseCtr(request, response) {
  const data = request.body;
  const coursesFromDb = await getCoursesbycoursename(data);
  if (coursesFromDb.data) {
    response.send({ msg: "successfully created" });
    return;
  }
}

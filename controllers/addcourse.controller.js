import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getCoursesbycoursename } from "../services/course.service.js";
export async function addCourseCtr(request, response) {
  const data = request.body;
  let body = {
    username: request.user.id,
    coursename: data.coursename,
    imageurl: data.imageurl,
    price: data.price,
    description: data.description,
  };
  try {
    await getCoursesbycoursename(body);
    response.send({ msg: "successfully created" });
    return;
  } catch (error) {
    response.status(500).send({ msg: "Failed to create" });
  }
}

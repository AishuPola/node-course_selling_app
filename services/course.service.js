import { courses } from "../entities/course.entity.js";

async function getCoursesbycoursename(data) {
  return await courses.create(data).go();
}

export { getCoursesbycoursename };

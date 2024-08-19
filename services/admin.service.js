import { admin } from "../entities/admin.entity.js";
import { courses } from "../entities/course.entity.js";
async function createAdmin(addAdmin) {
  return await admin.create(addAdmin).go();
}
async function getAdminbyAdminname(Adminname) {
  return await admin.get({ Adminname: Adminname }).go();
}
// all courses
async function getCourses() {
  return (await courses.scan.go()).data;
}
async function editCoursesById(existingData, updatedata) {
  return await courses
    .put({
      ...existingData.data,
      ...updatedata,
    })
    .go();
}

async function deleteCourseById(id) {
  await courses.delete({ courseId: id }).go();
}

async function getCourseById(id) {
  return await courses.get({ courseId: id }).go();
}

export {
  createAdmin,
  getAdminbyAdminname,
  getCourseById,
  deleteCourseById,
  editCoursesById,
  getCourses,
};

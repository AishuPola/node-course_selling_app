import { admin } from "../entities/admin.entity.js";
import { courses } from "../entities/course.entity.js";

async function createAdmin(addAdmin) {
  return await admin.create(addAdmin).go();
}
async function getAdminbyAdminname(Adminname) {
  return await admin.get({ Adminname: Adminname }).go();
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
  return await courses.delete({ coursename: id }).go();
}

async function getCourseById(id) {
  return await courses.get({ coursename: id }).go();
}

export {
  createAdmin,
  getAdminbyAdminname,
  getCourseById,
  deleteCourseById,
  editCoursesById,
};

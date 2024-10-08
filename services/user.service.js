import { courses } from "../entities/course.entity.js";
import { user } from "../entities/user.entity.js";
async function createUser(adduser) {
  return await user.create(adduser).go();
}
async function getuserbyusername(username) {
  return await user.get({ username: username }).go();
}
async function getCourses() {
  return (await courses.scan.go()).data;
}
export { createUser, getuserbyusername, getCourses };

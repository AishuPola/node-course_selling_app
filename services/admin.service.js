import { admin } from "../entities/admin.entity.js";
async function createAdmin(addAdmin) {
  return await admin.create(addAdmin).go();
}
async function getAdminbyAdminname(Adminname) {
  return await admin.get({ Adminname: Adminname }).go();
}
export { createAdmin, getAdminbyAdminname };

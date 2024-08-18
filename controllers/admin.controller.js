import { createAdmin, getAdminbyAdminname } from "../services/admin.service.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//$2b$10$ES9xOXJz6vB8XH.lje0q/u this is the salt value, everytime it will create the salt value.

const genHashPassword = async (password) => {
  const NO_OF_ROUNDS = 10;
  const salt = await bcrypt.genSalt(NO_OF_ROUNDS);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};
export async function createAdminctr(request, response) {
  const data = request.body;
  if (data.password.length < 8) {
    response.status(400).send({ msg: "pass is too short" });
    return;
  }
  const AdminFromDb = await getAdminbyAdminname(data.Adminname);

  if (AdminFromDb.data) {
    response.status(400).send({ msg: "Adminname already taken" });
    return;
  }
  const hashedPassword = await genHashPassword(data.password);
  try {
    await createAdmin({ Adminname: data.Adminname, password: hashedPassword });
    const token = jwt.sign({ id: data.Adminname }, process.env.SECRET_KEY);
    response.status(200).send({ msg: "sign up sucessful", data, token });
  } catch (error) {
    response.status(500).send("fail to add Admin"); //something bad happend on serve is 500
  }
}
export async function loginAdminctr(request, response) {
  const data = request.body;
  const AdminFromDb = await getAdminbyAdminname(data.Adminname);
  if (!AdminFromDb.data) {
    response.status(400).send({ msg: "invalid crendentials" });
    return;
  } else {
    const storedDbPassword = AdminFromDb.data.password;
    const providedPassword = data.password;

    const ispasswordcheck = await bcrypt.compare(
      providedPassword,
      storedDbPassword
    );
    console.log(ispasswordcheck);
    if (ispasswordcheck) {
      const token = jwt.sign(
        { id: AdminFromDb.data.Adminname },
        process.env.SECRET_KEY
      );
      response.status(200).send({ msg: "Login sucessful", token });
    } else {
      response.status(400).send({ msg: "Invalid credentials" });
    }
  }
}
export async function getUser(request, response) {
  response.send({ token: request.rawHeaders[1] });
}
export async function getCourseByIdCtrl(request, response) {
  const { id } = request.params;
  try {
    const res = await getCourseById(id);
    res.data
      ? response.send(res.data)
      : response.status(404).send("course not found");
  } catch (error) {
    console.log(error);
    response.status(500).send("fail to retrireve course");
  }
}
export async function deleteCourseByIdCtrl(request, response) {
  const { id } = request.params;
  // console.log(id)
  try {
    const res = await getCourseById(id);
    if (res.data) {
      await deleteCourseById(id);
      response.send({ msg: "deleted successfully", data: res.data });
    } else {
      response.status(404).send({ msg: "Course not found" });
    }
  } catch (error) {
    response.status(500).send("deleted failed");
  }
}

export async function editCoursesByIdctrl(request, response) {
  const { id } = request.params;
  const updatedata = request.body; //updated data
  try {
    const existingData = await getCourseById(id);
    if (existingData.data) {
      const result = await editCoursesById(existingData, updatedata);
      response.send(result);
    } else {
      response.status(404).send({ msg: "Course not found" });
    }
  } catch (error) {
    response.status(500).send("failed to edit the movie");
  }
  // console.log(id, data, movieIdx);
}

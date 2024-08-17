import jwt from "jsonwebtoken";

const auth = (request, response, next) => {
  const token = request.header("x-auth-token");
  jwt.verify(token, process.env.SECRET_KEY);
  next();
};
export { auth };

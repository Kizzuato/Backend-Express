const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { createUserRepo, Login, getAllUserRepo, deleteUserRepo, getUserByIdRepo } = require("./userRepo");
const { Response } = require("../../config/response");

dotenv.config();

const secretKey = process.env.SECRET_KEY_JWT;

const createUserServ = async (data) => {
    console.log(data);
  const hashPassword = await bcrypt.hash(data.password, 10);
  const dataRes = {
    u_name: data.name,
    u_email: data.email,
    title: data.title,
    u_password: hashPassword,
  };

  try {
    const response = await createUserRepo(dataRes);
    const dataReq = {
      name: response.u_name,
      title: response.title,
      uuid: response.u_id,
    };
    return dataReq;
  } catch (error) {
    console.log(error);
  }
};

const LoginUser = async (email, password) => {
  const user = await Login(email);

  if (!user) {
    return Response(404, "", "email invalid");
  }
  console.log(user)
  const validPassword = await bcrypt.compare(password, user.u_password);
  if (!validPassword) {
    return Response(404, "", "password invalid");
  }

  const token = jwt.sign({ namaUser: user.u_name, id: user.u_id }, secretKey, {
    expiresIn: "1d",
  });

  const data = {
    name: user.u_name,
    uuid: user.u_id,
    email: user.u_email,
    title: user.title,
    accessToken: token,
  };

  return Response(200, data, "email invalid");
};

const getAllUserServ = async () => {
  return await getAllUserRepo();
};

const deleteUserServ = async (id) => {
    return await deleteUserRepo(id)
}

const getUserByIdServ = async (id) => {
  return await getUserByIdRepo(id);
};

module.exports = {
  createUserServ,
  LoginUser,
  getAllUserServ,
  deleteUserServ,
  getUserByIdServ,
};

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const xlsx = require('xlsx')
const { createUserRepo, Login, getAllUserRepo, deleteUserRepo, getUserByIdRepo, updateUserRepo, emailUsed, createManyUserRepo } = require("./userRepo");
const { Response } = require("../../config/response");

dotenv.config();

const secretKey = process.env.SECRET_KEY_JWT;

const createUserServ = async (data) => {
  const salt = await bcrypt.genSalt()
  data.password = await bcrypt.hash(data.password, salt);
  const dataRes = {
    u_name: data.name,
    u_email: data.email,
    title: data.title,
    u_password: data.password,
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
  try {
    const user = await Login(email);

    if (!user) {
      return Response(404, null, 'User not found');
    }

    const validPassword = await bcrypt.compare(password, user.u_password);

    if (!validPassword) {
      return Response(401, null, 'Invalid password');
    }

    const token = jwt.sign({ namaUser: user.u_name, id: user.u_id }, secretKey, {
      expiresIn: '1d',
    });

    const data = {
      name: user.u_name,
      uuid: user.u_id,
      email: user.u_email,
      title: user.title,
      u_rate: user.u_rate,
      total_task: user.total_task,
      accessToken: token,
    };

    return Response(200, data, 'Login successful');
  } catch (error) {
    console.error(error);
    return Response(500, null, 'Internal server error');
  }
};

const getAllUserServ = async () => {
  return await getAllUserRepo();
};

const updateUserServ = async (id, data) => {
  try {
    if(data.u_email) await emailUsed(data.u_email).then((act) =>{ if(act) throw Error('Email already exist')})
    return await updateUserRepo(+id, data)
  } catch (err) {
    console.log(err)
    throw err
  }
}

const deleteUserServ = async (id) => {
  return await deleteUserRepo(+id)
}

const getUserByIdServ = async (id) => {
  return await getUserByIdRepo(id);
};

const importUser = async (file) => {
  let userExist = 0, dataToStore = []
  try {
    const excel = xlsx.readFile(file.path)
    const worksheet = excel.Sheets[excel.SheetNames[0]]
    let users = xlsx.utils.sheet_to_json(worksheet, { header: 1 })
    users.shift()
    if (users.length < 1) throw Error('No Data to Store')

    for (let user of users) {
      let [u_name, u_email, u_gender, title, division] = user
      const exist = await emailUsed(u_email)
      if (exist) {
        userExist++
        continue
      }
      dataToStore.push({ u_name, u_email, u_gender, title, division })
    }
    await createManyUserRepo(dataToStore)
    return { imported: dataToStore, existed: userExist }
  } catch (err) {
    console.log(err)
    throw err
  }
}

module.exports = {
  createUserServ,
  LoginUser,
  updateUserServ,
  getAllUserServ,
  importUser,
  deleteUserServ,
  getUserByIdServ,
};

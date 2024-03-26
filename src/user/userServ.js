const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const xlsx = require("xlsx");
const Branch = require("../Branch/branchRepo");
const Division = require("../Division/divisiRepo");
const {
  createUserRepo,
  Login,
  getAllUserRepo,
  deleteUserRepo,
  getUserByIdRepo,
  updateUserRepo,
  emailUsed,
  createManyUserRepo,
  getUserByDivisionRepo,
  userDeleted,
} = require("./userRepo");
const { Response } = require("../../config/response");
const { response } = require("../Notification/notificationRoute");

dotenv.config();

const secretKey = process.env.SECRET_KEY_JWT;

const createUserServ = async (data) => {
  const salt = await bcrypt.genSalt();
  data.password = await bcrypt.hash(data.password, salt);

  const dataRes = {
    u_name: data.name,
    u_email: data.email,
    u_password: data.password,
    title: data.title,
    division_id: data.division_id,
    branch_id: data.branch_id,
  };

  // console.log("🚀 ~ createUserServ ~ dataRes.division_id:", dataRes.division_id)
  // const division = await Division.getById(dataRes.division_id)

  // if (user) {
  // }

  try {
    const response = await createUserRepo(dataRes);
    const dataReq = {
      name: response.u_name,
      email:  response.u_email,
      password: response.password,
      division_id: response.division_id,
      branch_id: response.branch_id,
      title: response.title,
      uuid: response.u_id,
    };
    return dataReq;
  } catch (error) {
    console.log(error);
  }
};

const LoginUser = async (email, password, branch, token) => {
  // console.log("🚀 ~ LoginUser ~ token:", token)
  // console.log("🚀 ~ LoginUser ~ branch:", branch);
  try {
    const user = await Login(email);

    const division = await Division.getById(user.division_id);
    const branchRes = await Branch.getById(division.branch_id);
    
    if (token !== null) {
      const division = await Division.getById(user.division_id);
      const branchRes = await Branch.getById(division.branch_id);
      
      const token = jwt.sign(
        { namaUser: user.u_name, id: user.u_id },
        secretKey,
        {
          expiresIn: "1d",
        }
      );

      const data = {
        name: user.u_name,
        id: user.u_id,
        email: user.u_email,
        title: user.title,
        division: division.d_name,
        branch: branchRes.b_name,
        division_id: division.id,
        branch_id: branchRes.id,
        accessToken: token,
        deleted: user.deleted,
      };
      // console.log("🚀 ~ LoginUser ~ data:", data);

      return Response(200, data, "Login successful");
    } else {
      if (!user) {
        return Response(404, null, "User not found");
      }

      if (user.deleted === true) {
        return Response(401, user, "Account Deleted");
      }

      if (branchRes.b_name !== branch) {
        return Response(401, null, "Wrong Branch");
      }

      const validPassword = await bcrypt.compare(password, user.u_password);

      if (!validPassword) {
        return Response(401, null, "Invalid password");
      }

      const token = jwt.sign(
        { namaUser: user.u_name, id: user.u_id },
        secretKey,
        {
          expiresIn: "1d",
        }
      );

      const data = {
        name: user.u_name,
        id: user.u_id,
        email: user.u_email,
        title: user.title,
        division: division.d_name,
        division_id: division.id,
        branch_id: branchRes.id,
        branch: branchRes.b_name,
        accessToken: token,
        deleted: user.deleted,
      };
      // console.log("🚀 ~ LoginUser ~ data-data:", data);

      return Response(200, data, "Login successful");
    }
  } catch (error) {
    console.error(error);
    return Response(500, null, "Internal server error");
  }
};

const getAllUserServ = async (data) => {
  try {
    const branch_name = await Branch.getById(data.branch)
    
    if (branch_name.b_name === "PT. RES") {
        data.branch = undefined;
      } 
      
    const response = await getAllUserRepo(data);
    
    const branchIds = [...new Set(response.map((user) => user.branch_id))];
    const branchPromises = branchIds.map((id) => Branch.getById(id));
    const branches = await Promise.all(branchPromises);
    
    const divisionIds = [...new Set(response.map((user) => user.division_id))];
    const divisionPromises = divisionIds.map((id) => Division.getById(id));
    const divisions = await Promise.all(divisionPromises);
    
    // const branchIds = divisions.map((division) => data.branch);
    // const branchPromises = branchIds.map((id) => Branch.getById(id));
    // const branches = await Promise.all(branchPromises);

    const users = response.map((user) => {
      const division = divisions.find(
        (division) => division.id === user.division_id
      );
      const branch = branches.find(
        (branch) => branch.id === user.branch_id
      );
      return {
        ...user,
        division: division.d_name,
        branch: branch.b_name,
      };
    });
    return users;
  } catch (error) {
    console.error("Error in getAllUserServ:", error);
    throw error;
  }
};

const updateUserServ = async (id, data) => {
  try {
    // console.log(data);
    return await updateUserRepo(+id, data);
  } catch (err) {
    // console.log(err);
    throw err;
  }
};

const deleteUserServ = async (id) => {
  return await deleteUserRepo(+id);
};

const getUserByDivision = async (division) => {
  return await getUserByDivisionRepo(division);
};

const getUserByIdServ = async (id) => {
  const user = await getUserByIdRepo(id);
  
  if (!user) {
    throw new Error("User not found");
  }
  
  const division = await Division.getById(user.division_id);
  const branch = await Branch.getById(division.branch_id);
  user.division = division.d_name;
  user.division_id = division.id;
  user.branch = branch.b_name;
  user.branch_id = branch.id;
  // console.log("🚀 ~ getUserByIdServ ~ user:", user);
  return user;
};

const changePassword = async (id, newPassword) => {
  try {
    // console.log(id)
    // console.log(newPassword)
    const salt = await bcrypt.genSalt();
    u_password = await bcrypt.hash(newPassword, salt);
    return await updateUserRepo(id, { u_password });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const importUser = async (file) => {
  let userExist = 0,
    dataToStore = [];
  try {
    const excel = xlsx.readFile(file.path);
    const worksheet = excel.Sheets[excel.SheetNames[0]];
    let users = xlsx.utils.sheet_to_json(worksheet, { header: 1 });
    users.shift();
    if (users.length < 1) throw Error("No Data to Store");

    for (let user of users) {
      let [u_name, u_email, u_gender, title, division] = user;
      const exist = await emailUsed(u_email);
      if (exist) {
        userExist++;
        continue;
      }
      dataToStore.push({ u_name, u_email, u_gender, title, division });
    }
    await createManyUserRepo(dataToStore);
    return { imported: dataToStore, existed: userExist };
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = {
  createUserServ,
  LoginUser,
  changePassword,
  updateUserServ,
  getAllUserServ,
  importUser,
  deleteUserServ,
  getUserByDivision,
  getUserByIdServ,
  resetPasswordServ
};

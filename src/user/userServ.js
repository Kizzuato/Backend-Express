const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const xlsx = require("xlsx");
const Branch = require("../Branch/branchRepo");
const Division = require("../Division/divisiRepo");
const Position = require("../Position/positionRepo");
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
  activateUserRepo,
  userDeleted,
} = require("./userRepo");
const { Response } = require("../../config/response");
const { response } = require("../Notification/notificationRoute");
const { throwError } = require("../utils/error.utils");

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
    position_id: data.position_id,
  };

  try {
    const exist = await emailUsed(dataRes.u_email)
    if(exist) throw Error('Email alredy in used')
    const response = await createUserRepo(dataRes);
    const dataReq = {
      name: response.u_name,
      email: response.u_email,
      password: response.password,
      division_id: response.division.id,
      division: response.division.d_name,
      branch_id: response.branch.id,
      branch: response.branch.b_name,
      title: response.title,
      uuid: response.u_id,
    };
    return dataReq;
  } catch (error) {
    throwError(error)
  }
};

const LoginUser = async (email, password, branch, position, token) => {
  // console.log("🚀 ~ LoginUser ~ token:", token)
  // console.log("🚀 ~ LoginUser ~ branch:", branch);
  try {
    const user = await Login(email);

    const division = await Division.getById(user.division_id);
    const branchRes = await Branch.getById(division.branch_id);
    const position = await Position.getById(user.position_id);

    if (token !== null) {
      const division = await Division.getById(user.division_id);
      const branchRes = await Branch.getById(division.branch_id);
      const position = await Position.getById(user.position_id);

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
        position: position.p_name,
        position_id: position.id,
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
        position: position.p_name,
        position_id: position.id,
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
    const branch_name = await Branch.getById(data.branch);
    console.log("🚀 ~ getAllUserServ ~ branch_name:", branch_name)

    if (branch_name.b_name === "PT. RES" && data.title === "admin") {
      data.branch = undefined;
      data.division = undefined;
    }
    else if (data.title === "admin") {
      data.division = undefined;
    }
    else if (branch_name.b_name === "PT. RES") {
      data.branch = undefined;
    }
    console.log("🚀 ~ getAllUserServ ~ data.branch:", data)
    
    const response = await getAllUserRepo(data);

    if (response.length === 0) {
      throw new Error("Data kosong");
    }

    const branchIds = [...new Set(response.map((user) => user.branch_id))];
    const branchPromises = branchIds.map((id) => Branch.getById(id));
    const branches = await Promise.all(branchPromises);

    const divisionIds = [...new Set(response.map((user) => user.division_id))];
    const divisionPromises = divisionIds.map((id) => Division.getById(id));
    const divisions = await Promise.all(divisionPromises);

    const positionIds = [...new Set(response.map((user) => user.position_id))];
    const positionPromises = positionIds.map((id) => Position.getById(id));
    const positions = await Promise.all(positionPromises);
    // console.log("🚀 ~ getAllUserServ ~ positions:", positions)

    // const branchIds = divisions.map((division) => data.branch);
    // const branchPromises = branchIds.map((id) => Branch.getById(id));
    // const branches = await Promise.all(branchPromises);

    const users = response.map((user) => {
      const division = divisions.find(
        (division) => division.id === user.division_id
      );
      const position = positions.find(
        (position) => position.id === user.position_id
      );
      const branch = branches.find((branch) => branch.id === user.branch_id);
      return {
        ...user,
        division: division ? division.d_name : null,
        branch: branch ? branch.b_name : null,
        position: position ? position.p_name : null,
      };
    });
    
    return users;
  } catch (error) {
    if (error.message === "Data kosong") {
      // console.log("Tidak ada data yang ditemukan.");
      return []; // Mengembalikan array kosong jika tidak ada data ditemukan
    } else {
      console.error("Error in getAllUserServ:", error);
      throw error;
    }
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

const activateUserServ = async (id) => {
  return await activateUserRepo(+id);
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
      let [u_name, u_email, gender, positionName, divisionName, title, branchName] = user;
      // console.log("🚀 ~ importUser ~ branchName:", users)
      const exist = await emailUsed(u_email);
      if (exist) {
        userExist++;
        continue;
      }

      // Check if position exists in the database
      let branch = await Branch.getByBranchName(branchName);
      if (!branch) {
        throw new Error("Branch not found");
      }
      
      let lowercaseTitle = title.toLowerCase();
      if (!title) {
        throw new Error("Data Role Untuk User", u_name, "Tidak Valid")
      }
        
      let division = await Division.getByDivisionName(divisionName);
      if (!division) {
        throw new Error("Division not found");
      }

      let position = await Position.getByPositionName(positionName);
      if (!position) {
        const data = { p_name: positionName, branch_id: branch.id };
        position = await Position.create(data);
      }

      password = "12345";
      const salt = await bcrypt.genSalt();
      hashedPassword = await bcrypt.hash(password, salt);
      dataToStore.push({ u_name, u_email, gender, u_password: hashedPassword, title: lowercaseTitle, position_id: position.id, division_id: division.id, branch_id: branch.id });
    }
    await createManyUserRepo(dataToStore);
    return { imported: dataToStore, existed: userExist };
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const resetPasswordServ = async(id, password) => {
  const user = getUserByIdRepo(id)
  if(!user){
    return 'user tidak ditemukan'
  }
  const salt = await bcrypt.genSalt()
  const passwordNew = await bcrypt.hash(password, salt);
  try {
    const response = await resetPassword(id, passwordNew)
    return response
  } catch (error) {
    return error
  }

}

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
  resetPasswordServ,
  activateUserServ
};

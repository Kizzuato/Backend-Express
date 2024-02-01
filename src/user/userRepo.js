const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createUserRepo = async (userData) => {
  return await prisma.m_user.create({
    data: userData,
  });
};

const Login = async (email) => {
  return await prisma.m_user.findUnique({
    where: {
      u_email: email,
    }
  });
};

const getAllUserRepo = async () => {
    return await prisma.m_user.findMany()
}

const deleteUserRepo = async (id) => {
    return await prisma.m_user.delete({
        where: {
            u_id : id
        }
    })
}
module.exports = {
  createUserRepo,
  Login,
  getAllUserRepo,
  deleteUserRepo
};

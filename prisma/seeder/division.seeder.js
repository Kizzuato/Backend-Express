const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const divisions = [
  { branch_id: 1, d_name: "Acc & Purchase" },
  { branch_id: 1, d_name: "HRD & GA" },
  { branch_id: 1, d_name: "Produksi" },
  { branch_id: 1, d_name: "Marketing" },
];

const divisionSeed = async () => {
  await prisma.division.createMany({ data: divisions });
};

module.exports = { divisionSeed };

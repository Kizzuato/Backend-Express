const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const cabang = async (branchName) => {
  const branch = await prisma.branch.findFirst({
    where: { b_name: branchName },
  });
  return branch ? branch.id : null;
};

const divisionSeed = async () => {
  const divisions = [
    { branch_id: await cabang("PT. RES"), d_name: "ACCOUNTING & FINANCE" },
    { branch_id: await cabang("PT. RES"), d_name: "HUMAN RESOURCE" },
    { branch_id: await cabang("PT. RES"), d_name: "IT & GA" },
    { branch_id: await cabang("PT. RES"), d_name: "KEMITRAAN" },
    { branch_id: await cabang("PT. RES"), d_name: "MANAJEMEN" },
    { branch_id: await cabang("PT. RES"), d_name: "MARKETING" },
    { branch_id: await cabang("PT. RES"), d_name: "RISET & DEVELOPMENT" },
    { branch_id: await cabang("Produksi RES"), d_name: "ACCOUNTING & FINANCE" },
    { branch_id: await cabang("Produksi RES"), d_name: "HUMAN RESOURCE" },
    { branch_id: await cabang("Produksi RES"), d_name: "IT & GA" },
    { branch_id: await cabang("Produksi RES"), d_name: "MANAJEMEN" },
    { branch_id: await cabang("Produksi RES"), d_name: "PRODUKSI" },
    { branch_id: await cabang("Produksi RES"), d_name: "RISET & DEVELOPMENT" },
    { branch_id: await cabang("ONIC 1"), d_name: "ACCOUNTING & FINANCE" },
    { branch_id: await cabang("ONIC 1"), d_name: "HUMAN RESOURCE" },
    { branch_id: await cabang("ONIC 1"), d_name: "MANAJEMEN" },
    { branch_id: await cabang("ONIC 1"), d_name: "MARKETING" },
    { branch_id: await cabang("ONIC 1"), d_name: "OPERATIONAL" },
    { branch_id: await cabang("ONIC 1"), d_name: "PRODUKSI" },
    { branch_id: await cabang("ONIC 1"), d_name: "SALES" },
    { branch_id: await cabang("ONIC 2"), d_name: "ACCOUNTING & FINANCE" },
    { branch_id: await cabang("ONIC 2"), d_name: "HUMAN RESOURCE" },
    { branch_id: await cabang("ONIC 2"), d_name: "IT & GA" },
    { branch_id: await cabang("ONIC 2"), d_name: "MANAJEMEN" },
    { branch_id: await cabang("ONIC 2"), d_name: "MARKETING" },
    { branch_id: await cabang("ONIC 2"), d_name: "OPERATIONAL" },
    { branch_id: await cabang("ONIC 2"), d_name: "PRODUKSI" },
    { branch_id: await cabang("ONIC 2"), d_name: "SALES" },
    { branch_id: await cabang("Sehatku"), d_name: "ACCOUNTING & FINANCE" },
    { branch_id: await cabang("Sehatku"), d_name: "HUMAN RESOURCE" },
    { branch_id: await cabang("Sehatku"), d_name: "MANAJEMEN" },
    { branch_id: await cabang("Sehatku"), d_name: "MARKETING" },
    { branch_id: await cabang("Sehatku"), d_name: "PRODUKSI" },
    { branch_id: await cabang("Sehatku"), d_name: "SALES" },
    { branch_id: await cabang("ONIC KLP"), d_name: "HUMAN RESOURCE" },
    { branch_id: await cabang("ONIC KLP"), d_name: "MANAJEMEN" },
    { branch_id: await cabang("ONIC KLP"), d_name: "PRODUKSI" },
    { branch_id: await cabang("ONIC KLP"), d_name: "SALES" },
  ];

  const existingDivisions = await prisma.division.findMany();
  const existingDivisionMap = existingDivisions.reduce((map, division) => {
    map[`${division.branch_id}-${division.d_name}`] = true;
    return map;
  }, {});

  const newDivisions = divisions.filter(
    (division) =>
      !existingDivisionMap[`${division.branch_id}-${division.d_name}`]
  );

  await prisma.division.createMany({ data: newDivisions });

  // await prisma.division.createMany({ data: divisions });
};

module.exports = { divisionSeed };

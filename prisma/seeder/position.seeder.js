const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const cabang = async (branchName) => {
const branch = await prisma.branch.findFirst({ where: { b_name: branchName } });
return branch ? branch.id : null;
};

const positionSeed = async () => {
const positions = [
  { branch_id: await cabang("PT. RES"), p_name: "Acc & Purchase" },
  { branch_id: await cabang("PT. RES"), p_name: "HRD & GA" },
  { branch_id: await cabang("PT. RES"), p_name: "Produksi" },
  { branch_id: await cabang("PT. RES"), p_name: "Marketing" },
  { branch_id: await cabang("Produksi RES"), p_name: "ADMIN GUDANG PRODUKSI" },
  { branch_id: await cabang("Produksi RES"), p_name: "SUPERVISOR HRD" },
  { branch_id: await cabang("Produksi RES"), p_name: "ADMIN SISTEM" },
  { branch_id: await cabang("Produksi RES"), p_name: "SECURITY" },
  { branch_id: await cabang("Produksi RES"), p_name: "STAFF GA" },
  { branch_id: await cabang("Produksi RES"), p_name: "DIREKTUR UTAMA" },
  { branch_id: await cabang("Produksi RES"), p_name: "MANAGER ACC & FINANCE" },
  { branch_id: await cabang("Produksi RES"), p_name: "STAFF GUDANG PRODUKSI" },
  { branch_id: await cabang("Produksi RES"), p_name: "STAFF PRODUKSI" },
  { branch_id: await cabang("Produksi RES"), p_name: "STAFF R & D" },
  { branch_id: await cabang("ONIC 1"), p_name: "ADMIN GUDANG" },
  { branch_id: await cabang("ONIC 1"), p_name: "PKL" },
  { branch_id: await cabang("ONIC 1"), p_name: "STAFF ACCOUNTING" },
  { branch_id: await cabang("ONIC 1"), p_name: "SUPERVISOR HRD" },
  { branch_id: await cabang("ONIC 1"), p_name: "DIREKTUR UTAMA" },
  { branch_id: await cabang("ONIC 1"), p_name: "KEPALA CABANG" },
  { branch_id: await cabang("ONIC 1"), p_name: "MANAGER ACC & FINANCE" },
  { branch_id: await cabang("ONIC 1"), p_name: "WK. SPV MARKETING" },
  { branch_id: await cabang("ONIC 1"), p_name: "STAFF GUDANG" },
  { branch_id: await cabang("ONIC 1"), p_name: "STAFF UMUM" },
  { branch_id: await cabang("ONIC 1"), p_name: "STAFF PRODUKSI" },
  { branch_id: await cabang("ONIC 1"), p_name: "WK SPV PRODUKSI" },
  { branch_id: await cabang("ONIC 1"), p_name: "DELIVERY" },
  { branch_id: await cabang("ONIC 1"), p_name: "SALES OUTLET" },
  { branch_id: await cabang("ONIC 1"), p_name: "SALES OUTLET PASEL" },
  { branch_id: await cabang("ONIC 1"), p_name: "SALES OUTLET TONJONG" },
  { branch_id: await cabang("ONIC 1"), p_name: "SUPERVISOR SALES" },
  { branch_id: await cabang("ONIC 1"), p_name: "WAKIL SUPERVISOR SALES" },
  { branch_id: await cabang("ONIC 2"), p_name: "ADMIN GUDANG" },
  { branch_id: await cabang("ONIC 2"), p_name: "PKL" },
  { branch_id: await cabang("ONIC 2"), p_name: "STAFF ACCOUNTING" },
  { branch_id: await cabang("ONIC 2"), p_name: "SUPERVISOR HRD" },
  { branch_id: await cabang("ONIC 2"), p_name: "DIREKTUR UTAMA" },
  { branch_id: await cabang("ONIC 2"), p_name: "KEPALA CABANG" },
  { branch_id: await cabang("ONIC 2"), p_name: "MANAGER ACC & FINANCE" },
  { branch_id: await cabang("ONIC 2"), p_name: "WK. SPV MARKETING" },
  { branch_id: await cabang("ONIC 2"), p_name: "STAFF GUDANG" },
  { branch_id: await cabang("ONIC 2"), p_name: "STAFF UMUM" },
  { branch_id: await cabang("ONIC 2"), p_name: "STAFF PRODUKSI" },
  { branch_id: await cabang("ONIC 2"), p_name: "WK SPV PRODUKSI" },
  { branch_id: await cabang("ONIC 2"), p_name: "DELIVERY" },
  { branch_id: await cabang("ONIC 2"), p_name: "SALES OUTLET" },
  { branch_id: await cabang("ONIC 2"), p_name: "SALES OUTLET PASEL" },
  { branch_id: await cabang("ONIC 2"), p_name: "SALES OUTLET TONJONG" },
  { branch_id: await cabang("ONIC 2"), p_name: "SUPERVISOR SALES" },
  { branch_id: await cabang("ONIC 2"), p_name: "WAKIL SUPERVISOR SALES" },
  { branch_id: await cabang("Sehatku"), p_name: "PKL" },
  { branch_id: await cabang("Sehatku"), p_name: "STAFF ACCOUNTING" },
  { branch_id: await cabang("Sehatku"), p_name: "SUPERVISOR HRD" },
  { branch_id: await cabang("Sehatku"), p_name: "DIREKTUR UTAMA" },
  { branch_id: await cabang("Sehatku"), p_name: "KEPALA CABANG" },
  { branch_id: await cabang("Sehatku"), p_name: "MANAGER ACC & FINANCE" },
  { branch_id: await cabang("Sehatku"), p_name: "WK KEPALA CABANG" },
  { branch_id: await cabang("Sehatku"), p_name: "WK. SPV MARKETING" },
  { branch_id: await cabang("Sehatku"), p_name: "WK SPV PRODUKSI" },
  { branch_id: await cabang("Sehatku"), p_name: "DELIVERY" },
  { branch_id: await cabang("Sehatku"), p_name: "SALES OUTLET" },
  { branch_id: await cabang("Sehatku"), p_name: "SALES OUTLET TONJONG" },
  { branch_id: await cabang("Sehatku"), p_name: "SPV SALES SEHATKU" },
  { branch_id: await cabang("ONIC KLP"), p_name: "SUPERVISOR HRD" },
  { branch_id: await cabang("ONIC KLP"), p_name: "DIREKTUR UTAMA" },
  { branch_id: await cabang("ONIC KLP"), p_name: "KEPALA CABANG" },
  { branch_id: await cabang("ONIC KLP"), p_name: "MANAGER ACC & FINANCE" },
  { branch_id: await cabang("ONIC KLP"), p_name: "STAFF PRODUKSI" },
  { branch_id: await cabang("ONIC KLP"), p_name: "DELIVERY" },
  { branch_id: await cabang("ONIC KLP"), p_name: "SALES OUTLET" },
  { branch_id: await cabang("ONIC KLP"), p_name: "SPV SALES SEHATKU" },
  { branch_id: await cabang("ONIC KLP"), p_name: "SPV SALES SEHATKUKUKU" }
];

const existingPosition = await prisma.position.findMany();
  const existingDivisionMap = existingPosition.reduce((map, position) => {
    map[`${position.branch_id}-${position.d_name}`] = true;
    return map;
  }, {});

  const newPosition = positions.filter(position => !existingDivisionMap[`${position.branch_id}-${position.d_name}`]);

  await prisma.position.createMany({ data: newPosition });

// await prisma.position.createMany({ data: positions });
};

module.exports = { positionSeed };

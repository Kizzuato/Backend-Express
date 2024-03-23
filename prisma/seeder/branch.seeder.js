const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const branch = [
    {
        b_name: "PT. RES"
    },
    {
        b_name: "Produksi RES"
    },
    {
        b_name: "ONIC 1"
    },
    {
        b_name: "ONIC 2"
    },
    {
        b_name: "ONIC 3"
    },
    {
        b_name: "Sehatku"
    },
    {
        b_name: "ONIC KLP"
    },
]

const branchSeed = async () => {
    await prisma.branch.createMany({ data: branch })
}

module.exports = { branchSeed }
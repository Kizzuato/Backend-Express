const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const branch = [
    {
        branchName: "PT. RES"
    },
    {
        branchName: "Produksi RES"
    },
    {
        branchName: "ONIC 1"
    },
    {
        branchName: "ONIC 2"
    },
    {
        branchName: "ONIC 3"
    },
    {
        branchName: "Sehatku"
    },
    {
        branchName: "ONIC KLP"
    },
]

const branchSeed = async () => {
    await prisma.branch.createMany({ data: branch })
}

module.exports = { branchSeed }
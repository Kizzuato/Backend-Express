const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const divisions = [
    {
        divisionName: "Acc & Purchase"
    },
    {
        divisionName: "Oprasional Sales"
    },
    {
        divisionName: "Produksi"
    },
    {
        divisionName: "HRD & GA"
    },
    {
        divisionName: "Marketing"
    },
]

const divisiSeed = async () => {
    await prisma.division.createMany({ data: divisions })
}

module.exports = { divisiSeed }
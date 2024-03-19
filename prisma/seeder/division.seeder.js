const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const divisions = [
    {
        divisionName: "PT. RES"
    },
    {
        divisionName: "Produksi RES"
    },
    {
        divisionName: "ONIC 1"
    },
    {
        divisionName: "ONIC 2"
    },
    {
        divisionName: "ONIC 3"
    },
    {
        divisionName: "Sehatku"
    },
    {
        divisionName: "ONIC KLP"
    },
]

const divisiSeed = async () => {
    await prisma.division.createMany({ data: divisions })
}

module.exports = { divisiSeed }
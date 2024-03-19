const { divisiSeed } = require("./division.seeder")
const { userSeed } = require("./m_user.seeder")

const runSeeder = async () => {
    await divisiSeed()
    await userSeed()
}

runSeeder()
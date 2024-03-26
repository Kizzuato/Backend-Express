const { branchSeed } = require("./branch.seeder")
const { divisionSeed } = require("./division.seeder")
const { userSeed } = require("./m_user.seeder")
const { taskSeed } = require("./task.seeder")

const runSeeder = async () => {
    await branchSeed()
    await divisionSeed()
    await userSeed()
    // await taskSeed()
}

runSeeder()
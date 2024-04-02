const { branchSeed } = require("./branch.seeder")
const { divisionSeed } = require("./division.seeder")
const { positionSeed } = require("./position.seeder")
const { userSeed } = require("./m_user.seeder")
const { taskSeed } = require("./task.seeder")

const runSeeder = async () => {
    // await branchSeed()
    await divisionSeed()
    await positionSeed()
    // await userSeed()
    // await taskSeed()
}

runSeeder()
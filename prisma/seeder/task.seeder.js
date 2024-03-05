const { PrismaClient } = require("@prisma/client");
const { use } = require("../../src/task/taskController");
const prisma = new PrismaClient();
const tasks = [
    {
        task_type: 'Single',
        task_title: "Single Task",
        priority: "Important",
        iteration: "Daily",
        description: "Task Single Task",
        status: "In-progress",
        progress: 0,
    },
    {
        task_type: 'Multi',
        task_title: "Multi Task",
        priority: "Normal",
        iteration: "Weekley",
        description: "Task Single Task",
        status: "Done",
        progress: 0,
    },
    {
        task_type: 'Single',
        task_title: "Single Task",
        priority: "High",
        iteration: "Monthly",
        description: "Task Single Task",
        progress: 0,
    },
    {
        task_type: 'Single',
        task_title: "Single Task",
        priority: "Important",
        iteration: "Insidental",
        description: "Task Single Task",
        status: "Deleted",
        progress: 0,
    },
    {
        task_type: 'Single',
        task_title: "Single Task",
        priority: "Important",
        iteration: "Daily",
        description: "Task Single Task",
        status: "Idle",
        progress: 0,
    },
    {
        task_type: 'Single',
        task_title: "Single Task",
        priority: "Important",
        iteration: "daily",
        description: "Task Single Task",
        status: "Open",
        progress: 0,
    },
]

const taskSeed = async (userData) => {
    try{
        for(let task of tasks){
            task.pic_id = userData.id
            task.spv_id = userData.id
            task.pic_title = userData.title
            task.pic = userData.id
            task.spv = userData.id
            task.created_by = userData.u_name
            await prisma.task.create({ data: task })
        }
    }catch(err){
        console.log(err)
    }
}

module.exports = { taskSeed }
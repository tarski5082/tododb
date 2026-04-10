import prisma from "./db.js";



const newTask = await prisma.task.create({
  data: {
    Tache: "Apprendre Prisma", // Must match the capital 'T' in your schema
    Fait: false                // Optional, since it defaults to false
  },
});

async function createTask(task){
    const newTask = await prisma.task.create({
        data:{
            Tache:task
        }
    });
    return newTask;
}

createTask('saluatation');

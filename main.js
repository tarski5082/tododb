import prisma from "./db";



const task = await prisma.task.create({
  data: {
    tache: "Apprendre Prisma",
  },
});

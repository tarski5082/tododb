const prisma =require('./db.js');
const {app, BrowserWindow} = require('electron');
const path = require('path')

function createWindow(){
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences:{
            preload:path.join(__dirname,'preload.js'),
            contextIsolation:true,
            nodeIntegration:false
        }
    });
    win.loadFile('renderer/index.html');
}

app.whenReady().then(createWindow);



async function createTask(task){
    const newTask = await prisma.task.create({
        data:{
            Tache:task
        }
    });
    return newTask;
}

async function loadTask() {
    const tasks = await prisma.task.findMany();
    return tasks;
}

async function deleteTask(id_) {
    await prisma.task.delete({where:{Id:id_}});
}


async function updateDoneTask(id_){
    const task = await prisma.task.findUnique({
        where:{
            Id:id_
        }
    })
    await prisma.task.update({
        where:{
            Id:id_
        },
        data:{
            Fait:!task?.Fait
        },
    })
}


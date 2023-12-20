const { where } = require('sequelize');

const Users = require('../database').Users;
const Tasks = require('../database').Tasks;

exports.getTasksController = async (req, res) => {
    const id = req.user.id;
    const listTasks = await Tasks.findAll({ where: { userId: id } })
    res.json(listTasks)
}
exports.getOneController = async (req, res) => {
    const id = req.params.id;
    const task = await Tasks.findOne({ where: { userId: id  } });
    res.json(task);
}
exports.updateTaskController = async (req, res) => {
    const id = req.params.id;
    const task = await Tasks.findOne({ where: { userId: id  } });
    if(!task) {
        return res.status(400).json({message: "task not found"})
    }
    const { title, content, targetdate } = req.body;
    
    if (!title || !content || !targetdate) {
        return res.status(400).json({ message: "Something Empty" })
    }
    const ok = await Tasks.update({ title, content, targetdate },
        {
            where: { userId: id }
        })
    if(ok) {
        return res.json({message: "updated successfull"})
    }
    
}
exports.deleteTaskController = async (req, res) => {
    const id = req.params.id;
    const task = await Tasks.findOne({ where: { userId: id  } });
    if(!task) {
        return res.status(400).json({message: "task not found"})
    }
    const ok = await Tasks.destroy({
        where: {
            where: { userId: id }
        }
    })
    if(ok) {
        return res.json({message: "deleted successfull"})
    }
}
exports.addTasksController = async (req, res) => {
    const userId = req.user.id;
    const { title, content, targetdate } = req.body
    if (!title || !content || !targetdate) {
        return res.status(400).json({ message: "Something Empty" })
    }
    const newTask = new Tasks({ title, content, targetdate, userId })
    const saveTask = await newTask.save().catch(
        (err) => {
            console.log('Error: ', err);
            return res.status(500).json({ error: "Cannot register user at the moment!" });
        }
    )
    if (saveTask) {
        return res.json({ message: "Task added successfully" });
    }
}

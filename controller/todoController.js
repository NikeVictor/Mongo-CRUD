const Task = require('../model/todoModel')

module.exports = {
    // Create a todo task
    createTask: async (req, res) => {    
        try {
            const task = req.body;
            const newTask = new Task(task)
            console.log(newTask)
            await newTask.save();
            res.json({
              data: newTask
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({error});
        }
    },

    // Get all todo tasks
    getAllTasks: async (req, res, next) => {
        try {
          const tasks = await Task.find({});
          res.status(200).json({
          data: tasks
          });
        } catch (error) {
          next(error)
        }
    },

    // Updating a task
  updateTask: async (req, res, next) => {
    try {
        const update = req.body
        const taskId = req.params.taskId;
        await Task.findByIdAndUpdate(taskId, update);
        const task = await Task.findById(taskId)
        res.status(200).json({
            message: 'Task has been updated',
            data: task
    });
    } catch (error) {
        next(error)
    }
},
 
// Deleting a task
deleteTask: async (req, res, next) => {
    try {
        const taskId = req.params.taskId;
        await Task.findByIdAndDelete(taskId);
        res.status(200).json({
            message: 'Task has been deleted'
    });
    } catch (error) {
        next(error)
    }
}
}
const express = require('express');
const router = express.Router();
const todoController = require('../controller/todoController');

router.post('/createTask', todoController.createTask);
router.get('/getTasks', todoController.getAllTasks);
router.patch('/updateTask/:taskId', todoController.updateTask);
router.delete('/deleteTask/:taskId', todoController.deleteTask);

module.exports = router;
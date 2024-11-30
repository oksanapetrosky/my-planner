const { Router } = require('express');
const { getTasks, saveTask, editTask, deleteTask } = require('./TaskController');

const router = Router();

router.get('/tasks', getTasks);

router.post('/tasks', saveTask);

router.put('/tasks', editTask);

router.delete('/tasks', deleteTask);

module.exports = router;

const express = require('express');
const router = express.Router();

const {
    createTask,
    getTasks,
    updateTask,
    deleteTask
} = require('../controllers/taskController');

// POST /tasks - Create a task
router.post('/', createTask);

// GET /tasks - Get all tasks
router.get('/', getTasks);

// PATCH /tasks/:id - Update a task
router.patch('/:id', updateTask);

// DELETE /tasks/:id - Delete a task
router.delete('/:id', deleteTask);

module.exports = router;

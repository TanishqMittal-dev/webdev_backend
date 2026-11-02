require('dotenv').config();
const Task = require('./models/Task');
console.log('MongoDB URI loaded:', process.env.MONGO_URI?.startsWith('mongodb+srv://'));
const express = require('express');
const connectDB = require('./config/db');

const app = express();

app.use(express.json());

// Test route
app.get('/', (req, res) => {
    res.send('Welcome to To-Do List Manager Backend!');
});

// Temporary POST route

app.post('/tasks', async (req, res) => {
    try {
        const task = new Task(req.body);
        const savedTask = await task.save();

        res.status(201).json({
            message: 'Task created successfully!',
            task: savedTask
        });
    } catch (error) {
        res.status(400).json({
            message: 'Failed to create task',
            error: error.message
        });
    }
});
app.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
app.patch('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(
            req.params.id,
            { completed: req.body.completed },
            { new: true, runValidators: true }
        );

        if (!task) {
            return res.status(404).json({
                message: 'Task not found'
            });
        }

        res.status(200).json({
            message: 'Task updated successfully!',
            task
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);

        if (!task) {
            return res.status(404).json({
                message: 'Task not found'
            });
        }

        res.status(200).json({
            message: 'Task deleted successfully!',
            task
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Connect to MongoDB, then start the server
const PORT = process.env.PORT || 3000;

const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

startServer();
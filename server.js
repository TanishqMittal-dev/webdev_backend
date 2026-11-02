
require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

app.use(express.json());

// Home route
app.get('/', (req, res) => {
    res.send('To-Do List API is running!');
});

// Task routes
app.use('/tasks', taskRoutes);

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error.message);
        process.exit(1);
    }
};

startServer();

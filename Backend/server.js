const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const {errorHandler} = require('./middleware/errorMiddleware');
const morgan = require('morgan');
const cors = require('cors');

dotenv.config(); // Load environment variables

connectDB(); // Connect to MongoDB

const app = express();
app.use(express.json()); // Middleware to parse JSON

app.get('/', (req, res) => {
    res.send('API is running...');
});

// Add routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);
app.use(errorHandler);  // Middleware to handle errors
app.use(morgan('dev')); // Middleware to log HTTP requests
app.use(cors());        // Middleware to enable CORS
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'OK', uptime: process.uptime() });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

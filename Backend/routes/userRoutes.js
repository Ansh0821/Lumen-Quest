const express = require('express');
const {
    registerUser,
    loginUser,
    getUsers,
    getUserById,
} = require('../controllers/userController');
const authenticateToken = require('../middleware/authMiddleware'); // Role-based access middleware

const router = express.Router();

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected routes
router.get('/', authenticateToken(['Admin']), getUsers); // Only Admin can access
router.get('/:id', authenticateToken(['Admin', 'User']), getUserById); // Admin or the same user

module.exports = router;

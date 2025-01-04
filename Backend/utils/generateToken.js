const jwt = require("jsonwebtoken");

const generateToken = (user) => {
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is not defined in environment variables.");
    }

    return jwt.sign(
        {
            id: user.id,       // User ID
            email: user.email, // User email
            role: user.role,   // User role
        },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRY || "1d" } // Default to 1 day if JWT_EXPIRY is not set
    );
};

module.exports = generateToken;

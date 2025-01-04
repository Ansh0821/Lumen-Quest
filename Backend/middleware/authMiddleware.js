const jwt = require('jsonwebtoken');

const authenticateToken = (allowedRoles) => {
  return (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Access token missing' });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;

      if (allowedRoles.includes(decoded.role) || req.params.id === decoded.id) {
        return next();
      }

      return res.status(403).json({ message: 'Access forbidden: Insufficient permissions' });
    } catch (error) {
      return res.status(403).json({ message: 'Invalid or expired token' });
    }
  };
};

module.exports = authenticateToken;

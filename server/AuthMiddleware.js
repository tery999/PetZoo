const jwt = require("jsonwebtoken");

function AuthMiddleware(req, res, next) {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ error: 'Access denied' });
    try {
     jwt.verify(token, 'your-secret-key');
     next();
     } catch (error) {
     res.status(401).json({ error: 'Invalid token' });
     }
     };
    
    module.exports = AuthMiddleware;
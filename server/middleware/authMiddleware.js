const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.protect = (roles = []) => async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'No token found.' });
  }

  try {
    const decoded = jwt.verify(token, global.JWT_SECRET || 'secret');

    const user = await User.findById(decoded.id).select('-password');
    if (!user) {
      return res.status(401).json({ error: 'User not found.' });
    }

    req.user = user;

    if (roles.length && !roles.includes(user.role)) {
      return res.status(403).json({ error: 'Access forbidden: insufficient role.' });
    }

    next();
  } catch (err) {
    console.error('JWT error:', err.message);
    return res.status(401).json({ error: 'Invalid or expired token.' });
  }
};

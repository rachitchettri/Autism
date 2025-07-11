const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// ✅ Register controller — multi-role
exports.register = async (req, res) => {
  const { name, email, password, role, childName, childAge, orgName, orgAddress } = req.body;

  try {
    // Basic validation
    if (!name || !email || !password || !role) {
      return res.status(400).json({ error: 'Name, email, password, and role are required.' });
    }

    if (!['parent', 'kid', 'organization'].includes(role)) {
      return res.status(400).json({ error: 'Invalid role specified.' });
    }

    // Check for existing user
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(409).json({ error: 'User with this email already exists.' });
    }

    // Hash password
    const hashed = await bcrypt.hash(password, 10);

    // Build user object
    const user = new User({
      name,
      email,
      password: hashed,
      role,
      childProfile: role === 'parent' ? { name: childName || '', age: childAge || null } : undefined,
      organizationProfile: role === 'organization' ? { orgName: orgName || '', orgAddress: orgAddress || '' } : undefined
    });

    await user.save();

    res.status(201).json({ message: '✅ User registered successfully!' });
  } catch (err) {
    console.error('Register error:', err);
    res.status(500).json({ error: 'Something went wrong during registration.' });
  }
};

// ✅ Login controller — multi-role aware
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'No user found with this email.' });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ error: 'Incorrect password.' });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      global.JWT_SECRET || 'secret',
      { expiresIn: '7d' }
    );

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        childProfile: user.childProfile,
        organizationProfile: user.organizationProfile
      }
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Something went wrong during login.' });
  }
};

const express = require('express');
const { registerUser, loginUser,updateBasicInfo,updatePreferences } = require('../controllers/authController');
const router = express.Router();
const {protect} = require('../middleware/authMiddleware')

router.post('/register', registerUser);
router.post('/login', loginUser);
router.patch('/basic-info', protect(), updateBasicInfo);
router.patch('/preferences', protect(), updatePreferences);
module.exports = router;

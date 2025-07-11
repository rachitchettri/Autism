// routes/games.js
const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { getAllChildren } = require('../controllers/gamesController');

const router = express.Router();

router.get('/all-children', protect(['organization']), getAllChildren);

module.exports = router;

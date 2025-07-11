const express = require('express');
const router = express.Router();
const { getRandomQuote } = require('../controllers/quotesController');

router.get('/random', getRandomQuote);

module.exports = router;

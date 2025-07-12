const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  createKid,
  getKids,
  updateKid,
  deleteKid,
} = require('../controllers/kidController');

router.use(protect());

// POST /api/kids - create new kid
router.post('/', createKid);

// GET /api/kids - list all kids for logged-in user
router.get('/', getKids);

// PUT /api/kids/:id - update kid (name or scores)
router.put('/:id', updateKid);

// DELETE /api/kids/:id - delete kid
router.delete('/:id', deleteKid);

module.exports = router;

// controllers/gameController.js
const User = require('../models/User');
const GameRecord = require('../models/GameRecord');

exports.getAllChildren = async (req, res) => {
  try {
    const parents = await User.find({ role: 'parent' });
    const results = [];

    for (const parent of parents) {
      const gamesCount = await GameRecord.countDocuments({ userId: parent._id });
      results.push({
        parentName: parent.name,
        childName: parent.childProfile?.name,
        childAge: parent.childProfile?.age,
        gamesCount
      });
    }

    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not load children.' });
  }
};

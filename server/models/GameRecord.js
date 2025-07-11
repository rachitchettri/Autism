// server/models/GameRecord.js
const mongoose = require('mongoose');

const GameRecordSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  gameName: String,
  score: Number,
  duration: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.models.GameRecord || mongoose.model('GameRecord', GameRecordSchema);

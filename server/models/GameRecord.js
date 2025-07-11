// server/models/GameRecord.js
const mongoose = require('mongoose');

const GameRecordSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  gameName: String,       // e.g., "WorkShape"
  score: Number,          // e.g., 1 point per correct shape
  duration: Number,       // optional
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.models.GameRecord || mongoose.model('GameRecord', GameRecordSchema);

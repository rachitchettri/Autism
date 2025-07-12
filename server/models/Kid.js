const mongoose = require('mongoose');
const shortid = require('shortid');

const kidSchema = new mongoose.Schema({
  kidId: {
    type: String,
    unique: true,
    default: () => shortid.generate(),
  },
  name: {
    type: String,
    required: true,
  },
  parentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  gameScores: {
    behaviour: { type: Number, default: 0 },
    speech: { type: Number, default: 0 },
    shapes: { type: Number, default: 0 },
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Kid', kidSchema);

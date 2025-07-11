const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
  text: String,
  author: String
});

module.exports = mongoose.models.Quote || mongoose.model('Quote', QuoteSchema);

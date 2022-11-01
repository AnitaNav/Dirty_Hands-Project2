const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requireSchema = new Schema({
  soil: {
    type: String,
    enum: ['Yes', 'No'],
    required: true,
  },
  fertilizer: {
    type: String,
    enum: ['Yes', 'No'],
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Require', requireSchema);
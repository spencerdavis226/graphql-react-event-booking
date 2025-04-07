const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = mongoose.model('Event', eventSchema);
// Mongoose uses the model name ('Event') to create or use the 'events' collection in the database. That’s why you see 'events' in MongoDB—Mongoose automatically pluralizes and lowercases your model name.

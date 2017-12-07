const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const bookingSchema = new Schema({
  user: {
    type: ObjectId,
    ref: 'User',
    default: null
  },
  date: {
    type: Date,
    default: Date.now
  },
  pax: {
    type: Number,
    default: 12
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'available', 'not-available'],
    default: 'available'
  },
  boat: {
    name: String,
    captain: String,
    location: String
  }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;

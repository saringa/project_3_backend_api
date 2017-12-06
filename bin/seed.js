const Booking = require('../models/booking');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/booking-api', {
  useMongoClient: true
});

const boats = [
  {
    name: 'Menorca',
    captain: 'Allen',
    location: 'Sambo Creek'
  },
  {
    name: 'Mallorca',
    captain: 'Victor',
    location: 'Sambo Creek'
  },
  {
    name: 'Ibiza',
    captain: 'Yitp',
    location: 'Rio Esteban'
  },
  {
    name: 'Formentera',
    captain: 'Allen',
    location: 'Rio Esteban'
  },
  {
    name: 'Roatan',
    captain: 'Allen',
    location: 'Sambo Creek'
  },
  {
    name: Utila,
    captain: 'Allen',
    location: 'Sambo Creek'
  },
  {
    name: 'Guanaja',
    captain: 'Allen',
    location: 'Sambo Creek'
  },
  {
    name: 'Cisnes',
    captain: 'Allen',
    location: 'Sambo Creek'
  },
  {
    name: 'Belize',
    captain: 'Allen',
    location: 'Sambo Creek'
  },
  {
    name: 'Amapola',
    captain: 'Allen',
    location: 'Sambo Creek'
  }
];

let bookings = [];

Booking.create(entries, (err, data) => {
  if (err) {
    throw err;
  }
  console.log('Success', entries);
  mongoose.connection.close();
});

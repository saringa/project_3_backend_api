const Booking = require('../models/booking');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/booking-api', {
  useMongoClient: true
});

const boats = [
  {
    boat: {
      name: 'Menorca',
      captain: 'Allen',
      location: 'Sambo Creek'
    }
  },
  {
    boat: {
      name: 'Mallorca',
      captain: 'Victor',
      location: 'Sambo Creek'
    }
  },
  {
    boat: {
      name: 'Ibiza',
      captain: 'Yitp',
      location: 'Rio Esteban'
    }
  },
  {
    boat: {
      name: 'Formentera',
      captain: 'Allen',
      location: 'Rio Esteban'
    }
  },
  {
    boat: {
      name: 'Roatan',
      captain: 'Allen',
      location: 'Sambo Creek'
    }
  },
  {
    boat: {
      name: 'Utila',
      captain: 'Allen',
      location: 'Sambo Creek'
    }
  },
  {
    boat: {
      name: 'Guanaja',
      captain: 'Allen',
      location: 'Sambo Creek'
    }
  },
  {
    boat: {
      name: 'Cisnes',
      captain: 'Allen',
      location: 'Sambo Creek'
    }
  },
  {
    boat: {
      name: 'Belize',
      captain: 'Allen',
      location: 'Sambo Creek'
    }
  },
  {
    boat: {
      name: 'Amapola',
      captain: 'Allen',
      location: 'Sambo Creek'
    }
  }
];

let bookings = [];

Booking.create(boats, (err, data) => {
  if (err) {
    throw err;
  }
  console.log('Success', boats);
  mongoose.connection.close();
});

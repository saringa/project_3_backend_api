const Booking = require('../models/booking');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/booking-api', {
  useMongoClient: true
});

const boats = [
  {
    boat: {
      name: 'Boat #1',
      captain: 'Capt. Allen',
      location: 'Nueva Armenia',
      pax: 12
    }
  },
  {
    boat: {
      name: 'Boat #2',
      captain: 'Capt. Tejada',
      location: 'Corozal',
      pax: 12
    }
  },
  {
    boat: {
      name: 'Boat #3',
      captain: 'Capt. Wüity',
      location: 'Nueva Armenia'
    }
  },
  {
    boat: {
      name: 'Boat #4',
      captain: 'Capt. Flores',
      location: 'Nueva Armenia',
      pax: 12
    }
  },
  {
    boat: {
      name: 'Boat #5',
      captain: 'Capt. Cordova',
      location: 'Sambo Creek',
      pax: 12
    }
  },
  {
    boat: {
      name: 'Boat #6',
      captain: 'Capt. Yito',
      location: 'Nueva Armenia',
      pax: 12
    }
  },
  {
    boat: {
      name: 'Boat #7',
      captain: 'Capt. Moreira',
      location: 'Rio Esteban',
      pax: 12
    }
  },
  {
    boat: {
      name: 'Boat #8',
      captain: 'Capt. Arzú',
      location: 'Nueva Armenia',
      pax: 12
    }
  },
  {
    boat: {
      name: 'Boat #9',
      captain: 'Capt. Garcia',
      location: 'Rio Esteban',
      pax: 12
    }
  }
];

Booking.create(boats, (err, data) => {
  if (err) {
    throw err;
  }
  console.log('Success', boats);
  mongoose.connection.close();
});

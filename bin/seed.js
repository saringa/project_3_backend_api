const Booking = require('../models/booking');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/booking-api', {
  useMongoClient: true
});

const NUM_DAYS = 150;

let boats = [
  {
    name: 'Boat #1',
    captain: 'Capt. Al',
    location: 'N.Armenia'
  },
  {
    name: 'Boat #2',
    captain: 'Capt. Teja',
    location: 'Corozal'
  },
  {
    name: 'Boat #3',
    captain: 'Capt. Wüity',
    location: 'N.Armenia'
  },
  {
    name: 'Boat #4',
    captain: 'Capt. Flo',
    location: 'N.Armenia'
  },
  {
    name: 'Boat #5',
    captain: 'Capt. Cor',
    location: 'SamboCreek'
  },
  {
    name: 'Boat #6',
    captain: 'Capt. Yito',
    location: 'N.Armenia'
  },
  {
    name: 'Boat #7',
    captain: 'Capt. More',
    location: 'R.Esteban'
  },
  {
    name: 'Boat #8',
    captain: 'Capt. Arzú',
    location: 'N.Armenia'
  },
  {
    name: 'Boat #9',
    captain: 'Capt. Gar',
    location: 'R.Esteban'
  }
];

function generateBookings() {
  let bookings = [];
  for (let i = 0; i < NUM_DAYS; i++) {
    const newDate = new Date();
    newDate.setDate(newDate.getDate() + i);
    for (let j = 0; j < boats.length; j++) {
      const booking = {
        boat: boats[j],
        date: newDate
      };
      bookings.push(booking);
    }
  }
  return bookings;
}

const bookings = generateBookings();
console.log(bookings);

console.log('beforeCreate--------');
Booking.create(bookings, (err, data) => {
  if (err) {
    throw err;
  }
  console.log('Success', bookings);
  mongoose.connection.close();
});

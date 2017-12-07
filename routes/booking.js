const express = require('express');
const router = express.Router();
const Booking = require('../models/booking');

// GET ALL BOOKINGS
router.get('/', function(req, res, next) {
  Booking.find({}, (err, data) => {
    if (err) {
      return next(err);
    }
    res.json(data);
  });
});

router.get('/available', function(req, res, next) {
  Booking.find({ status: 'available' }, (err, data) => {
    if (err) {
      return next(err);
    }
    res.json(data);
  });
});

router.put('/:id/confirm', (req, res, next) => {
  Booking.findById(req.params.id, (err, data) => {
    if (err) {
      return next(err);
    }

    data.status = 'confirmed';

    Booking.save(data, (err, dataSaved) => {
      if (err) {
        throw err;
      }
      console.log('Success', dataSaved);
      res.json(dataSaved);
    });
  });
});

// GET ONE BOOKING BY ID
router.get('/:id', function(req, res, next) {
  Booking.findById(req.params.id, (err, data) => {
    if (err) {
      return next(err);
    }
    res.json(data);
  });
});

module.exports = router;

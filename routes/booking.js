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
// GET BOOKINGS BY PENDING STATUS
router.get('/pending', function(req, res, next) {
  Booking.find({ status: 'pending' }, (err, data) => {
    if (err) {
      return next(err);
    }
    res.json(data);
  });
});
// GET BOOKINGS BY CONFIRMED
router.get('/confirmed', function(req, res, next) {
  Booking.find({ status: 'confirmed' }, (err, data) => {
    if (err) {
      return next(err);
    }
    res.json(data);
  });
});

// GET BOOKING BY NOT AVAILABLE
router.get('/not-available', function(req, res, next) {
  Booking.find({ status: 'not-available' }, (err, data) => {
    if (err) {
      return next(err);
    }
    res.json(data);
  });
});

// PUT BOOKING CONFIRMED
router.put('/:id/confirm', (req, res, next) => {
  Booking.findById(req.params.id, (err, data) => {
    if (err) {
      return next(err);
    }

    data.status = 'confirmed';

    data.save((err, dataSaved) => {
      if (err) {
        throw err;
      }
      console.log('Success', dataSaved);
      res.json(dataSaved);
    });
  });
});

// PUT BOOKING NOT AVAILABLE
router.put('/:id/reject', (req, res, next) => {
  Booking.findById(req.params.id, (err, data) => {
    if (err) {
      return next(err);
    }

    data.status = 'not-available';

    data.save((err, dataSaved) => {
      if (err) {
        throw err;
      }
      console.log('Success', dataSaved);
      res.json(dataSaved);
    });
  });
});

//PUT BOOKING REQUESTED
router.put('/:id/request', (req, res, next) => {
  Booking.findById(req.params.id, (err, data) => {
    if (err) {
      return next(err);
    }

    data.status = 'pending';

    data.save((err, dataSaved) => {
      if (err) {
        throw err;
      }
      console.log('Success', dataSaved);
      res.json(dataSaved);
    });
  });
});

//GET ONE BOOKING BY ID
router.get('/:id', function(req, res, next) {
  Booking.findById(req.params.id, (err, data) => {
    if (err) {
      return next(err);
    }
    res.json(data);
  });
});

module.exports = router;

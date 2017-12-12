const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const response = require('./helpers/response');
const configurePassport = require('./helpers/passport');

const cors = require('cors');
const dotenv = require('dotenv').config();

const index = require('./routes/index');
const auth = require('./routes/auth');
const booking = require('./routes/booking');

const mongoose = require('mongoose');

const app = express();

// create app connect to db
mongoose.connect(process.env.MONGODB_URI);

const passport = configurePassport();
app.use(passport.initialize());
app.use(passport.session());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    origin: [process.env.CLIENT_URL]
  })
);

//routes
app.use('/index', index);
app.use('/auth', auth);
app.use('/booking', booking);

// 404 and error handles
app.use((req, res) => {
  response.notFound(req, res);
});

app.use((err, req, res, next) => {
  // always log error
  console.log('ERROR', req.method, req.path, err);

  // only send response if the error ocurred b4 sending the response
  if (!res.headersSent) {
    response.unexpectedError(req, res, err);
  }
});

module.exports = app;

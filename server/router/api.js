// const express = require('express');
const user = require('./user');
const carousel = require('./carousel');

// const router = express.Router();

// router.use('/user',user)

module.exports = function(app){
  app.use('/api/user',user);
  app.use('/api/carousel',carousel);

};

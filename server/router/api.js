// const express = require('express');
const user = require('./user');
const carousel = require('./carousel');
const news = require('./news');
const newsClass = require('./newsClass');
// const router = express.Router();

// router.use('/user',user)

module.exports = function(app){
  app.use('/api/user',user);
  app.use('/api/carousel',carousel);
  app.use('/api/news',news);
  app.use('/api/newsClass',newsClass);
};

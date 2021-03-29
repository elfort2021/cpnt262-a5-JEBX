const express = require('express');
const ingredient = require('../models/recipemodel');
const router = express.Router();
const config = require('../config');

router.use((req, res, next) => {
  res.locals = config;
  next();
})

router.get('/', function (request, response) {
  response.render('pages/recipegen', {
    pageTitle: "Recipe Generator",
    ingredient: ingredient});
})

module.exports = router
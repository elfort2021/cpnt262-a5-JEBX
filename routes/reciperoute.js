const express = require('express');
const ingredient = require('../models/recipemodel');
const router = express.Router();

router.get('/', function (request, response) {
  response.render('pages/recipegen', {
    pageTitle: "Recipe Generator",
    ingredient: ingredient});
})

module.exports = router
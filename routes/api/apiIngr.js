const express = require('express');
const ingredient = require('../../models/recipemodel');
const router = express.Router();

router.get('/recipegenerator', function (request, response) {
  ingredient.find({}, function (error, ingredients) {
    if (error) {
      response.sendStatus(404);
    }
    response.json(ingredients);
  });
})

module.exports = router;
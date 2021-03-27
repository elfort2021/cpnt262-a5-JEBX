const mongoose = require("mongoose");

const recipeGenSchema = new mongoose.Schema({
  id: Number,
  ingr: String,
  ingrImage: String,
  titleTrait: String
})

 module.exports = mongoose.model("Ingredient", recipeGenSchema);

//  id # will be used in for loops with variables starting at relevant increments for recipe generator
// titleTrait is being used to generate recipe titles
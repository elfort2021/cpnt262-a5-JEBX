const mongoose = require("mongoose");

const recipeGenSchema = new mongoose.Schema({
  id: Number,
  // 1-3=fruits 4-6=dairy 7-9=proteins 10-12=grains
  ingr: String,
  ingrImage: String,
  titleTrait: String
})

 module.exports = mongoose.model("Ingredient", recipeGenSchema);

//  id # will be used in for loops with variables starting at relevant increments for recipe generator
// titleTrait is being used to generate recipe titles
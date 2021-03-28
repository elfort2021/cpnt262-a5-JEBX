const mongoose = require("mongoose");

const recipeGenSchema = new mongoose.Schema({
  id: Number,
  // 1-3=fruits 4-6=dairy 7-9=proteins 10-12=grains
  ingr: String,
  titleTrait: String,
  // the name & description keys were substituted with ingr & titleTrait respectively
  imgSrc: String,
  width: Number,
  height: Number
})

 module.exports = mongoose.model("Ingredient", recipeGenSchema);

//  id # will be used in for loops with variables starting at relevant increments for recipe generator
// titleTrait is being used to generate recipe titles
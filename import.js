const mongoose = require('./_connection.js') 

// Import seed data
// const subSeed = require(`./seeds/subscribers.js`);
const ingrSeed = require(`./seeds/ingredients`);

// Define model
// const Subscriber = require(`./models/subscriber.js`);
const Ingredient = require(`./models/recipemodel`);

// Subscriber.insertMany(subSeed, function(error, subscriber) {
//   console.log('Data import completed.')
//   mongoose.connection.close();
// });

Ingredient.insertMany(ingrSeed, function(error, ingredient) {
  console.log('Data import completed.')
  mongoose.connection.close();
});
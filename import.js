const mongoose = require('./_connection.js') 

// Import seed data
const subSeed = require(`./seeds/subscribers.js`);
const ingrSeed = require(`./seeds/ingredients`);
const memSeed = require(`./seeds/members`);

// Define model
const Subscriber = require(`./models/subscriber.js`);
const Ingredient = require(`./models/recipemodel`);
const Member = require(`./models/member`);

Subscriber.insertMany(subSeed, function(error, subscriber) {
  console.log('Subscriber import completed.')
});

Member.insertMany(memSeed, function(error, member) {
  console.log('Members import completed.')
});

Ingredient.insertMany(ingrSeed, function(error, ingredient) {
  console.log('Ingredients import completed.')
  mongoose.connection.close();
});


const mongoose = require('./_connection.js') 

// Import seed data
const subSeed = require(`./seeds/subscribers.js`);

// Define model
const Subscriber = require(`./models/subscriber.js`);

Subscriber.insertMany(subSeed, function(error, subscriber) {
  console.log('Data import completed.')
  mongoose.connection.close();
});
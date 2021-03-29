const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber');
const config = require('../config')

router.use(express.urlencoded({ extended: true }));

router.use((req, res, next) => {
  res.locals = config
  next()
})

// use .post() insert subscriber to database
router.post('/', (req, res) => {
  const subscriber = new Subscriber(req.body) 
  subscriber.save(function(err, data){
    if (err) {
      res.send('<p>Problem subscribing! <a href="/">Please try again</a>.</p>')
    }
    // output the insert data so that they can be showing on the confirm page
    res.render('pages/subscribed', {
      pageTitle: `Subscribed`,
      user: data
    });
  })
})

module.exports = router

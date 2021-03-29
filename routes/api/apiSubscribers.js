const express = require('express');
const Subscriber = require('../../models/subscriber')

const router = express.Router();

// use .get(/api/v0/subscribers) to setup the subscriber data //
router.get('/subscribers', (req, res) => {
  Subscriber.find({}, (err, subscribers) => {
    if (err) {
      res.sendStatus(404)
    }
    res.json(subscribers)
  })
})

router.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(404).send('404: Page Not Found')
})

module.exports = router;
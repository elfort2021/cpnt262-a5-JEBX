const express = require('express');
// const definitions = require('../data/definitions.js');
const Subscriber = require('../../models/subscriber')

const router = express.Router();

router.get('/subscribers', (req, res) => {
  // res.json(definitions);
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

// router.get('/:name', (req, res) => {
//   // use findOne() to find the 'id' in url
//   Subscriber.findOne({name: req.params.name}, (err, item) => {        
//     let character = item;
//     // catch error if 'id' is not a number
//     if(err) {
//       res.status(404);
//       res.send('404: Page Not Found');
//     }
//     // returns the single object
//     else {
//       res.render('./pages/single-item', {
//         pageTitle: `Subscriber`,
//         alt: '',
//         dog: character
//       });
//     };
//   });
// })

module.exports = router;
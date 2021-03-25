const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber');
// const slugify = require('slugify')


// router.get('/', (req, res) => {
//   if (req.query.action == 'delete' && req.query.name) {
//     Subscriber.deleteOne({name: req.query.name}, (err, data) => {
//       if (err) {
//         res.send('<p>Problem deleting definition! <a href="/">Please try again</a>.</p>')
//       }
//       res.send('<p>Definition deleted! <a href="/">View definition list</a>.</p>')
//     })
    
//   } else {
//     res.redirect('/')
//   }
  
// })

router.use(express.urlencoded({ extended: true }));

router.get('/', (req, res) => {
  res.redirect('/')
})

router.post('/', (req, res) => {
  // req.body.slug = slugify(req.body.term).toLowerCase()

  const subscriber = new Subscriber(req.body) 
  subscriber.save(function(err, data){
    if (err) {
      res.send('<p>Problem subscribing! <a href="/">Please try again</a>.</p>')
    }
    res.send('<p>Thank you for subscribing! <a href="/">View subscriber list</a>.</p>')
  })
})


module.exports = router
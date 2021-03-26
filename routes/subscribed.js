const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber');
// const bodyParser = require("body-parser")
// const slugify = require('slugify')


router.use(express.urlencoded({ extended: true }));

// router.get('/', (req, res) => {
//   res.redirect('/')
// })

router.post('/', (req, res) => {
  const subscriber = new Subscriber(req.body) 
  subscriber.save(function(err, data){
    if (err) {
      res.send('<p>Problem subscribing! <a href="/">Please try again</a>.</p>')
    }
    // res.send('<p>Thank you for subscribing! <a href="/">View subscriber list</a>.</p>')
    res.render('pages/subscribed');
  })
})

module.exports = router


// router.post('/', (req, res) => {
//   const subscriber = new Subscriber(req.body) 
//   subscriber.save(function(err, data){
//     if (err) {
//       res.send('<p>Problem subscribing! <a href="/">Please try again</a>.</p>')
//     }
//     res.render('./views/pages/subscribed');
//   })
// })

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

// app.use(bodyParser.urlencoded({
//   extended:true
// }));



// app.post('/subscribed', (req, res, next)=>{
//   console.log('data: ', req.body.name);
//   res.redirect('/'); });
//   app.use('/', (req, res,next)=>{
//   res.send('<h1> first midleware: Hello Tutorials Point </h1>');
// });




const express = require('express')
const router = express.Router()
const config = require('../config')
const Recipe = require('../models/recipemodel')

router.use((req, res, next) => {
  res.locals = config
  next()
})

router.get('/', (req, res) => {
  res.render('pages/index', {pageTitle: "Index"})
})

router.get('/subscribe', (req, res) => {
  res.render('pages/subscribe', {pageTitle: "Subscribe"})
})

router.get('/admin', (req, res) => {
  res.render('pages/admin', {pageTitle: "Subscribers List"})
})

router.get('/gallery', (req, res) => {
  res.render('pages/recipegen', {pageTitle: "Recipe Generator"})
})

router.get('/gallery/:id', (req, res) => {
  // use findOne() to find the 'id' in url
  Recipe.findOne({id: req.params.id}, (err, item) => {        
    let image = item;
    // catch error if 'id' is not a number
    if(err) {
      res.status(404);
      res.send('404: Page Not Found');
    }
    // returns the single object
    else {
      res.render('./pages/single-item', {
        pageTitle: `Single Image`,
        alt: '',
        rec: image
      });
    };
  });
})


module.exports = router;
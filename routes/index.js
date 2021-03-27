const express = require('express')
const router = express.Router()
const config = require('../config')

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
  res.render('pages/gallery', {pageTitle: "Gallery"})
})

module.exports = router;
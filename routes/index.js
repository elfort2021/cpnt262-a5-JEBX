const express = require('express')
const router = express.Router()
const config = require('../config')
// const Dog = require('../models/dog');

router.use((req, res, next) => {
  res.locals = config
  next()
})

router.get('/', (req, res) => {
  res.render('../views/pages/index', {pageTitle: "Index"})
})

router.get('/subscribe', (req, res) => {
  res.render('../views/pages/subscribe', {pageTitle: "Subscribe"})
})

router.get('/team', (req, res) => {
  res.render('../views/pages/team', {pageTitle: "Team Members"})
})

router.get('/admin', (req, res) => {
  res.render('../views/pages/admin', {pageTitle: "Subscribers List"})
})

router.get('/gallery', (req, res) => {
  res.render('../views/pages/gallery', {pageTitle: "Gallery"})
})

module.exports = router;
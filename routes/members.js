const express = require('express');
const router = express.Router()
const Member = require('../models/member');

const config = require('../config');
router.use((req, res, next) => {
  res.locals = config
  next()
})


//display all members

router.get('/', (request, response) => {

  response.render('pages/member', {pageTitle: "Team Members"});
})

module.exports = router
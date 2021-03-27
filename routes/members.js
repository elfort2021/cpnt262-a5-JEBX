const express = require('express');
const Member = require('../models/member');

const router = express.Router();

//display all products

router.get('/', (request, response) => {

  response.render('pages/member', {pageTitle: "Team Members"});
})

module.exports = router
const express = require('express');
const Member = require('../../models/member');

const router = express.Router();

// get json from MongDB
router.get('/members', (req, res) => {
  Member.find({}, (err, members) => {
    if(err) {
      res.sendStatus(404)
    }
    res.json(members)
  })
})


module.exports = router;
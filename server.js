const mongoose = require('./_connection')

const dotenv = require('dotenv').config()
const express = require('express')
const apiS = require('./routes/api/apiSubscribers')
const index = require('./routes/index')
const sub = require('./routes/subscribed')

//Xia Lin
const apiM = require('./routes/api/apiMember')
const members = require('./routes/members')

// const admin = require('./routes/admin')
// const gallery = require('./routes/gallery')


const app = express()

app.set('view engine', 'ejs');
app.use(express.static('./public'))

app.use('/api/v0', apiS)
app.use('/subscribed', sub)

//Xia Lin
app.use('/api/v0', apiM)
app.use('/members',members)

app.use('/', index)

app.use(function(req, res) {
  res.status(404);
  res.render('pages/404', {pageTitle: "404 Page"});
});


const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
  console.log('Listening on port: ' + PORT)
})
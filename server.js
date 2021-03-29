const mongoose = require('./_connection')

const dotenv = require('dotenv').config()
const express = require('express')
const path = require('path');
const index = require('./routes/index')

// subscribe
const apiS = require('./routes/api/apiSubscribers')
const sub = require('./routes/subscribed')

//Xia Lin
const apiM = require('./routes/api/apiMember')
const members = require('./routes/members')

// Recipe Generator
const apiRecipeGen = require("./routes/api/apiIngr")
const recipe =  require("./routes/reciperoute")

// const admin = require('./routes/admin')
// const gallery = require('./routes/gallery')


const app = express()

app.set('view engine', 'ejs');
app.use(express.static('./public'))

// subscribe
app.use('/api/v0', apiS)
app.use('/subscribed', sub)

//Xia Lin
app.use('/api/v0', apiM)
app.use('/members',members)

// Recipe Generator
app.use("/api/v0", apiRecipeGen)
app.use("/recipegenerator", recipe)

app.use('/', index)

// 404 error catcher
app.use(function(req, res, next) {
  res.status(404);
  // 404 error redirect to a html page
  res.sendFile('/public/404.html', {root : __dirname});
});

// 500 error catcher
app.use(function(error, req, res, next) {
  res.status(500);
  res.sendFile(path.join(__dirname,'/public/500.html'));
});

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
  console.log('Listening on port: ' + PORT)
})
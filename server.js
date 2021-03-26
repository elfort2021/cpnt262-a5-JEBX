const mongoose = require('./_connection')

const dotenv = require('dotenv').config()
const express = require('express')
const apiS = require('./routes/api/apiSubscribers')
// const subscribe = require('./routes/subscribe')
const index = require('./routes/index')

const app = express()

app.set('view engine', 'ejs');

app.use(express.static('./public'))

app.use('/', index)
app.use('/api/v0', apiS)
// app.use('/subscribe', subscribe)

app.use((req, res) => {
  res.sendStatus(404);
})

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
  console.log('Listening on port: ' + PORT)
})
const mongoose = require('./_connection')

const dotenv = require('dotenv').config()
const express = require('express')
const apiS = require('./routes/api/apiSubscribers')
const index = require('./routes/index')
const sub = require('./routes/subscribed')
// const team = require('./routes/team')
// const admin = require('./routes/admin')
// const gallery = require('./routes/gallery')


const app = express()

app.set('view engine', 'ejs');
app.use(express.static('./public'))

app.use('/api/v0', apiS)
app.use('/subscribed', sub)
// app.use('/team', team)

app.use('/', index)

app.use((req, res) => {
  res.sendStatus(404);
})

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
  console.log('Listening on port: ' + PORT)
})
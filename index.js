'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db, { useMongoClient: true }, (err, res) => {
  if (err) throw err
  app.listen(config.port, () => { console.log(`API REST listining in http://localhost:${config.port}`) })
})

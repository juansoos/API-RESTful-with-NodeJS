'use strict'

const mongoose = require('mongoose')
const app = require('./app')

const PORT = process.env.PORT || 3000
const DB = process.env.MONGODB_URI || 'mongodb://localhost:27017/api-rest'

mongoose.connect(DB, { useMongoClient: true }, (err, res) => {
  if (err) throw err
  app.listen(PORT, () => { console.log(`API REST listining in http://localhost:${PORT}`) })
})

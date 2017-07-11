'use strict'

const config = {
  port: process.env.PORT || 3000,
  db: process.env.MONGODB_URI || 'mongodb://localhost:27017/api-rest'
}

module.exports = config

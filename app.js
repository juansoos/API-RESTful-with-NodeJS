'use strict'
/**
 * Funcionalidades de Express
 */
const express = require('express')
const bodyParser = require('body-parser')
const api = require('./routes')

const app = express()

// Se añade el middleware de body-parser
app.use(bodyParser.urlencoded({ extended: false }))
// Para admitir peticiones con cuerpo del mensaje en formato json
app.use(bodyParser.json())
// Se usa el fichero de routes
app.use('/api', api)

module.exports = app

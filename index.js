'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const Product = require('./models/product')

const PORT = process.env.PORT || 3000
const DB = process.env.MONGODB_URI || 'mongodb://localhost:27017/api-rest'

const app = express()
// Se añade el middleware de body-parser
app.use(bodyParser.urlencoded({ extended: false }))
// Para admitir peticiones con cuerpo del mensaje en formato json
app.use(bodyParser.json())

// Ruta para consultar todos los productos
app.get('/api/product', (req, res) => {})
// Ruta para consultar un producto
app.get('/api/product/:productId', (req, res) => {})
// Ruta para añadir productos
app.post('/api/product', (req, res) => {
  let product = new Product()
  product.name = req.body.name
  product.picture = req.body.name
  product.price = req.body.price
  product.category = req.body.category
  product.description = req.body.description

  product.save((err, productStored) => {
    if (err) res.status(500).send({ message: err })
    res.status(200).send({ product: productStored })
  })
})
// Ruta para actualizar un producto
app.put('/api/product/:productId', (req, res) => {})
// Ruta para borrar un producto
app.delete('/api/product/:productId', (req, res) => {})

mongoose.connect(DB, { useMongoClient: true }, (err, res) => {
  if (err) throw err
  app.listen(PORT, () => { console.log(`API REST listining in http://localhost:${PORT}`) })
})

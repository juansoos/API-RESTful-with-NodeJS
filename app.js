'use strict'
/**
 * Funcionalidades de Express
 */
const express = require('express')
const bodyParser = require('body-parser')

const productCtrl = require('./controllers/product')

const app = express()
// Se añade el middleware de body-parser
app.use(bodyParser.urlencoded({ extended: false }))
// Para admitir peticiones con cuerpo del mensaje en formato json
app.use(bodyParser.json())

// Ruta para consultar todos los productos
app.get('/api/product', productCtrl.getProducts)
// Ruta para consultar un producto
app.get('/api/product/:productId', productCtrl.getProduct)
// Ruta para añadir productos
app.post('/api/product', productCtrl.saveProduct)
// Ruta para actualizar un producto
app.put('/api/product/:productId', productCtrl.updateProduct)
// Ruta para borrar un producto
app.delete('/api/product/:productId', productCtrl.deleteProduct)

module.exports = app

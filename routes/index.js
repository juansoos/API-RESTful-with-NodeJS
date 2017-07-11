'use strict'
/**
 * Fichero de las rutas de la API REST
 */
const express = require('express')
const api = express.Router()

const productCtrl = require('../controllers/product')

// Ruta para consultar todos los productos
api.get('/product', productCtrl.getProducts)
// Ruta para consultar un producto
api.get('/product/:productId', productCtrl.getProduct)
// Ruta para añadir productos
api.post('/product', productCtrl.saveProduct)
// Ruta para actualizar un producto
api.put('/product/:productId', productCtrl.updateProduct)
// Ruta para borrar un producto
api.delete('/product/:productId', productCtrl.deleteProduct)

module.exports = api

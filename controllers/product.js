'use strict'
/**
 * Controles de producto
 */
const Product = require('../models/product')

// función para obtener un producto por el id
function getProduct (req, res) {
  let productId = req.params.productId
  Product.findById(productId, (err, product) => {
    if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}` })
    if (!product) return res.status(404).send({ message: `El producto no existe: ${err}` })
    res.status(200).send({ product })
  })
}

// función para obtener todos los productos
function getProducts (req, res) {
  Product.find({}, (err, products) => {
    if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}` })
    if (!products) return res.status(404).send({ message: `No existen productos: ${err}` })
    res.status(200).send({ products })
  })
}

// función para guardar un producto
function saveProduct (req, res) {
  let product = new Product()
  product.name = req.body.name
  product.picture = req.body.name
  product.price = req.body.price
  product.category = req.body.category
  product.description = req.body.description

  product.save((err, productStored) => {
    if (err) res.status(500).send({ message: `Error al agregar el product: ${err}` })
    res.status(200).send({ product: productStored })
  })
}

// función para actualizar un producto
function updateProduct (req, res) {
  let productId = req.params.productId
  let update = req.body
  Product.findByIdAndUpdate(productId, update, (err, productUpdated) => {
    if (err) res.status(500).send({ message: `Error al actualizar el producto: ${err}` })
    res.status(200).send({ product: productUpdated })
  })
}

// función para eliminar un producto
function deleteProduct (req, res) {
  let productId = req.params.productId
  Product.findById(productId, (err, product) => {
    if (err) res.status(500).send({ message: `Error al borrar el producto: ${err}` })
    product.remove(err => {
      if (err) res.status(500).send({ message: `Error al borrar el producto: ${err}` })
      res.status(200).send({ message: 'El producto ha sido eliminado' })
    })
  })
}

// Exportar las funciones
module.exports = {
  getProduct,
  getProducts,
  saveProduct,
  updateProduct,
  deleteProduct
}

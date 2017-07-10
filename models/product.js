'use strict'
/**
 * Creación del esquema producto
 */
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ProductSchema = Schema({
  name: String,
  picture: String,
  price: { type: Number, default: 0 },
  category: { type: String, enum: ['computers', 'smartphones', 'others'] },
  description: String
})

module.exports = mongoose.model('Product', ProductSchema)

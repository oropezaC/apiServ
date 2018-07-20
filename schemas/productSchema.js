const mongoose = require('mongoose');

let productSchema =  mongoose.Schema({
  idProduct:Number,
  product:String,
  price:Number,
  stock:Number
});

var products = mongoose.model('products',productSchema);

module.exports = products;

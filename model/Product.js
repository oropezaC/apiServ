const mongoose = require('mongoose')
const Product = require('../schemas/productSchema')

function getProductsAll() {
  return new Promise((resolve, reject) => {
    Product.find({}).sort({ idProduct: 1 }).exec((err,products)=>{
      if (!err) {
        resolve({err:false,data:products})
      }else {
        resolve({err:true,descripcion:err})
      }
    })
  });
}

module.exports = {
  getProductsAll
};

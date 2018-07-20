const ProductModel = require('../model/Product')

function getProductsAll(req, res) {
  var token = req.headers['authorization']
  if (!token) {
      res.status(401).send({error:true, descripcion:"Es necesario Token de Autorización"})
  }else {
    token = token.replace('Bearer ','')
    jwt.verify(token,'Secret Hash',(err,user)=>{
      if (!err) {
        ProductModel.getProductsAll()
        .then((result)=>{
          if (!result.err) {
            res.status(201).send(result.data)
          }else {
            res.status(401).send(result.descripcion)
          }
        })
      }else {
        res.status(401).send({error:true,descripcion:'Token Invalido'})
      }
    })
  }
}

module.exports = {
  getProductsAll
};

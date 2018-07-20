let ventas = require('../dommyData/estadistica')

function getAll(req,res) {
  var token = req.headers['authorization']
  if (!token) {
    res.status(401).send({error:true, descripcion:"Es necesario Token de Autorización"})
  }else {
    token = token.replace('Bearer ','')
    jwt.verify(token,'Secret Hash',(err,user)=>{
      if (!err) {
        res.status(201).send({err:false, ventas})
      }else {
        res.status(401).send({error:true, descripcion:'Token Invalido'})
      }
    })
  }
}

module.exports = {
  getAll
};

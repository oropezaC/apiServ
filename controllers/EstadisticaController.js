let ventas = require('../dommyData/estadistica')

function getAll(req,res) {
  return new Promise((resolve, reject) => {
      res.json(ventas)
  });
}



module.exports = {
  getAll
};

const express = require('express');
const router = express.Router();
const estadisticaCtrl = require('../controllers/EstadisticaController')

router.route('/').get(estadisticaCtrl.getAll)

module.exports = router;

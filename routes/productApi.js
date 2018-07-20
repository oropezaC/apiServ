const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/ProductController')


router.route('/').get(productCtrl.getProductsAll)



module.exports = router;

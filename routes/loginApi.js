
const express = require('express')
const router = express.Router()
const loginCtrl = require('../controllers/LoginController')

router.route('/').post(loginCtrl.authUser)


module.exports = router;

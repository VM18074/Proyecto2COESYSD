const { Router } = require('express')
const loginController = require('../controllers/login.controller')
const router = Router()

router.get('/login', loginController.index)

module.exports = router
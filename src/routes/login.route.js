const { Router } = require('express')
const loginController = require('../controllers/login.controller')
const router = Router()

router.get('/login', loginController.index)
router.post('/login/add', loginController.index)
router.get('/login', loginController.login)

module.exports = router
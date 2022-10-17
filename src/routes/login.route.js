const { Router } = require('express')
const loginController = require('../controllers/login.controller')
const router = Router()

router.get('/login', loginController.index)
router.post('/login', loginController.auth)
router.get('/logout', loginController.logout)

module.exports = router
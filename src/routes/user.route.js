const { Router } = require('express')
const router = Router()

const userController = require('../controllers/user.controller')

router.get('/user/resetpassword', userController.index)
router.post('/user/resetpassword', userController.resetPassword)

module.exports = router

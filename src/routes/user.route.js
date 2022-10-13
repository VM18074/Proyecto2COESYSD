const { Router } = require('express')
const userController = require('../controllers/user.controller')
const router = Router()

router.get('/users', userController.index)
router.post('/users/add', userController.add)
router.get('/users/delete/:id', userController.delete)
router.get('/users/edit/:id', userController.edit)
router.post('/users/edit/:id', userController.update)

router.get('/user/resetpassword', userController.resetPasswordView)
router.post('/user/resetpassword', userController.resetPassword)

module.exports = router

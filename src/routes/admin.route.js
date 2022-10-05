const { Router } = require('express')
const adminController = require('../controllers/admin.controller')
const router = Router()

router.get('/admins', adminController.index)
router.post('/admins/add', adminController.add)
router.get('/admins/delete/:id', adminController.delete)
router.get('/admins/edit/:id', adminController.edit)
router.post('/admins/edit/:id', adminController.update)

module.exports = router

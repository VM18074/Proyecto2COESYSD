const { Router } = require('express')
const adminController = require('../controllers/admin.controller')
const router = Router()

router.get('/admins', adminController.index)
router.post('/admins/add', adminController.add)

module.exports = router

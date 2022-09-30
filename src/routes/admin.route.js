const { Router } = require('express')
const adminController = require('../controllers/admin.controller')
const router = Router()

router.get('/admins', adminController.index)

module.exports = router

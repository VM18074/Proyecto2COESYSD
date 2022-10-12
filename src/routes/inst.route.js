const { Router } = require('express')
const institucionController = require('../controllers/institucion.controller')
const router = Router()

router.get('/institucion', institucionController.index)
router.post('/institucion/add', institucionController.add)

module.exports = router

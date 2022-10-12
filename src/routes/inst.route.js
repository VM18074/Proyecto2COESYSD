const { Router } = require('express')
const institucionController = require('../controllers/institucion.controller')
const router = Router()

router.get('/institucion', institucionController.index)
router.post('/institucion/add', institucionController.add)
router.get('/institucion/delete/:id' , institucionController.delete)
router.get('/institucion/edit/:id', institucionController.edit) 
router.post('/admins/edit/:id', institucionController.update)

module.exports = router

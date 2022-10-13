const { Router } = require('express')
const alertaController = require('../controllers/alerta.controller')
const router = Router()

router.get('/alerta', alertaController.index)
router.get('/alerta/admin', alertaController.indexAmin)
router.post('/alerta/add', alertaController.add)
router.get('/alerta/delete/:id', alertaController.delete)
router.get('/alerta/edit/:id', alertaController.edit)
router.post('/alerta/edit/:id', alertaController.update)
router.get('/alerta/activar/:id', alertaController.aprobar)
router.post('/alerta/activar/:id', alertaController.activarD)



module.exports = router

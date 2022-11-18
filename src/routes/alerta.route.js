const { Router } = require('express')
const alertaController = require('../controllers/alerta.controller')
const router = Router()

const permisosAdmin = async(req,res,next) => {
    if(req.session.loggedin == true){
        if(req.session.admin == true){
            next()
        }else{
            res.render('home/index', {logueado: req.session.loggedin, admin: req.session.admin})
        }
    }else{
        res.render('home/index')
    }
}

const permisosUser = async(req,res,next) => {
    if(req.session.loggedin == true){
        if(req.session.admin != true){
            next()
        }else{
            res.render('home/index', {logueado: req.session.loggedin, admin: req.session.admin})
        }
    }else{
        res.render('home/index')
    }
}

router.get('/alerta', permisosUser, alertaController.index)
router.get('/alerta/admin', permisosAdmin, alertaController.indexAmin)
router.post('/alerta/add', permisosUser, alertaController.add)
router.get('/alerta/delete/:id', permisosAdmin, alertaController.delete)
router.get('/alerta/edit/:id', permisosUser, alertaController.edit)
router.post('/alerta/edit/:id', permisosUser, alertaController.update)
router.get('/alerta/activar/:id', permisosAdmin, alertaController.aprobar)
router.post('/alerta/activar/:id', permisosAdmin, alertaController.activarD)
router.get('/alerta/informePDF/:id', permisosAdmin, alertaController.informePDF) // Generar Informe PDF.
router.get('/alerta/informeDOCX/:id', permisosAdmin, alertaController.informeDOCX) // Generar Informe Word.

module.exports = router
const { Router } = require('express')
const institucionController = require('../controllers/institucion.controller')
const router = Router()

const permisos = async(req,res,next) => {
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
   
router.get('/institucion', permisos, institucionController.index)
router.post('/institucion/add', permisos, institucionController.add)
router.get('/institucion/delete/:id',permisos , institucionController.delete)
router.get('/institucion/edit/:id',permisos , institucionController.edit) 
router.post('/institucion/edit/:id',permisos , institucionController.update)

router.get('/institucion/enviarInforme/:id', permisos, institucionController.enviarInforme) // Enviar inforeme.

module.exports = router
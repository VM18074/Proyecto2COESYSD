const { Router } = require('express')
const {upload} = require('../helpers/filehelper');
const institucionController = require('../controllers/institucion.controller');
const router = Router()

const permisos = async(req,res,next) => {
    if(req.session.loggedin == true){
        if(req.session.admin == true){
            next()
        }else{
            res.redirect('/')
        }
    }else{
        res.redirect('/')
    }
}
   
router.get('/institucion', permisos, institucionController.index)
router.post('/institucion/add', permisos, institucionController.add)
router.get('/institucion/delete/:id',permisos , institucionController.delete)
router.get('/institucion/edit/:id',permisos , institucionController.edit) 
router.post('/institucion/edit/:id',permisos , institucionController.update)

router.get('/institucion/enviarInforme/:id',permisos, institucionController.enviarInforme) // Enviar informe.
router.post('/institucion/enviarInforme/:id', permisos, upload.array('files'),institucionController.sendEmails) // Enviar informe. 

module.exports = router
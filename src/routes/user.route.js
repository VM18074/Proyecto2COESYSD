const { Router } = require('express')
const userController = require('../controllers/user.controller')
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
router.get('/users', permisos, userController.index)
router.post('/users/add', permisos, userController.add)
router.get('/users/delete/:id', permisos, userController.delete)
router.get('/users/edit/:id', permisos, userController.edit)
router.post('/users/edit/:id', permisos, userController.update)

router.get('/user/resetpassword', userController.resetPasswordView)
router.post('/user/resetpassword', userController.resetPassword)

module.exports = router

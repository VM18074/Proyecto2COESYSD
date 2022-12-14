const { Router } = require('express')
const loginController = require('../controllers/login.controller')
const router = Router()

const permisos = async(req,res,next) => {
    if(req.session.loggedin != true){
        next()
    }else{
        res.redirect('/')
    }
}

router.get('/login', permisos, loginController.index)
router.post('/login', loginController.auth)
router.get('/logout', loginController.logout)

module.exports = router
const { Usuario } = require('./../models/')
const bcryptjs = require('bcryptjs')

const loginController= {
    index: async (req, res) => {  
        if(req.session.loggedin != true){
            res.render('login/index')             
        } 
    res.render('home/index')
    },

    logout:async  (req, res)=>{
        
        if (req.session.loggedin == true) {
            req.session.destroy();
            console.log('Sesion cerrada')
          }
          //req.session.loggedin == null;
          res.render('home/index');

    },


    // Permite agregar un nuevo usuario a la base de datos.
    auth: async (req, res) => {
        try {
            const data = req.body
           // const { email, password} = req.body

            const oldUser = await Usuario.findOne({
                where: {
                    email: data.email,
                },
            })

            if (oldUser ) {
                         bcryptjs.compare(data.password, oldUser.password,(err, isMatch)=>{
                        if(!isMatch){
                            req.flash('error_msg', 'La contraseña no coincide')
                            res.redirect('login')
                            
                            return
                        } else{
                            if(oldUser.RolNombre!=null){
                                req.session.loggedin=true;
                                req.session.admin=true;
                                res.render('home/index', {logueado: req.session.loggedin, admin: req.session.admin})
                            }else{
                                req.session.loggedin=true;
                                req.session.admin=null;
                                res.render('home/index', {logueado: req.session.loggedin, admin: req.session.admin})
                            }
                            
                        }
                    });
            }
                    else{
                req.flash('error_msg', 'No existe un Usuario con ese email.')
                res.redirect('login')
                return }
                            
        } catch (err) {
        console.log(err)

        req.flash('error_msg', 'Ha ocurrido un error')
        res.status(500).json(err)
    }
    },
}
                                                                                                                        
module.exports = loginController
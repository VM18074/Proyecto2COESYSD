const { Usuario } = require('./../models/')
const bcryptjs = require('bcryptjs')

const loginController= {
    index: async (req, res) => {   
    res.render('login/index')
    },

    
    login:async  (req, res)=>{
        if(req.session.loggedin != true){
            res.render('login/index')             
        }

    },


    // permite agregar un nuevo usuario a la base de datos
    outh: async (req, res) => {
        try {
            const data = req.body
            const { email, password} = req.body

            const oldUser = await Usuario.findOne({
                where: {
                    email,
                },
            })

            if (oldUser ) {
                         bcryptjs.compare(data.password, oldUser.password(err, isMatch));{
                        if(!isMatch){
                            res.render('/')
                            return
                        } 
                    }
            }
                    else{
                req.flash('error_msg', 'No existe un Usuario con ese email.')
                res.redirect('/')
                return }
                
            
        } catch (err) {
        console.log(err)

        req.flash('error_msg', 'Ha ocurrido un error')
        res.status(500).json(err)
    }
    },
}
                                                                                                                        

module.exports = loginController
const { Usuario, Alerta, Daño, Medida, Ubicacion } = require('./../models/')
const bcryptjs = require('bcryptjs')

const loginController = {
    index: async (req, res) => {
        if (req.session.loggedin != true) {
            res.render('login/index')
        }
           /* const data = await Alerta.findAll({
                where: {
                    activo: true,
                },
                include: [
                    {
                        model: Daño,
                    },
                    {
                        model: Medida,
                    },
                    {
                        model: Ubicacion,
                    },
                ],
                raw: true,
                nest: true,
            })
            res.render('home/index', { dataRows: data })*/
    },

    logout: async (req, res) => {

        if (req.session.loggedin == true) {
            req.session.destroy();
            console.log('Sesion cerrada')
        }
        const data = await Alerta.findAll({
            where: {
                activo: true,
            },
            include: [
                {
                    model: Daño,
                },
                {
                    model: Medida,
                },
                {
                    model: Ubicacion,
                },
            ],
            raw: true,
            nest: true,
        })

        res.render('home/index', { dataRows: data })

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

            if (oldUser) {
                bcryptjs.compare(data.password, oldUser.password, async (err, isMatch) => {
                    const data = await Alerta.findAll({
                        where: {
                            activo: true,
                        },
                        include: [
                            {
                                model: Daño,
                            },
                            {
                                model: Medida,
                            },
                            {
                                model: Ubicacion,
                            },
                        ],
                        raw: true,
                        nest: true,
                    })
            
                    if (!isMatch) {
                        req.flash('error_msg', 'La contraseña no coincide')
                        res.redirect('login')

                        return
                    } else {
                        if (oldUser.RolNombre != null) {
                            req.session.loggedin = true;
                            req.session.admin = true;
                            res.render('home/index', { logueado: req.session.loggedin, admin: req.session.admin, dataRows: data })
                        } else {
                            req.session.loggedin = true;
                            req.session.admin = null;
                            res.render('home/index', { logueado: req.session.loggedin, admin: req.session.admin, dataRows: data })
                        }

                    }
                });
            }
            else {
                req.flash('error_msg', 'No existe un Usuario con ese email.')
                res.redirect('login')
                return
            }

        } catch (err) {
            console.log(err)

            req.flash('error_msg', 'Ha ocurrido un error')
            res.status(500).json(err)
        }
    },
}

module.exports = loginController
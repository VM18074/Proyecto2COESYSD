const { Usuario, Administrador } = require('./../models/')

const adminController = {
    // retorna todos los administradores
    index: async (req, res) => {
        const usuarios = await Usuario.findAll({
            here: {
                isAdmin: true,
            },
            include: Administrador,
            raw: true,
            nest: true,
        })

        res.render('administrador/index', { usuarios })
    },

    // permite agregar un nuevo adminstrador a la base de datos
    add: async (req, res) => {
        try {
            const { alias, email, password, nombre, apellido, dui, telefono } = req.body

            const oldUser = await Usuario.findOne({
                where: {
                    email,
                },
            })

            const oldAdmin = await Administrador.findOne({
                where: {
                    dui,
                },
            })
            if (oldUser) {
                res.redirect('/admins')
                return
            } else if (oldAdmin) {
                res.redirect('/admins')
            } else {
                const usuario = await Usuario.create({ nombre: alias, email, password, isAdmin: true })
                const admin = await Administrador.create({
                    UsuarioId: usuario.id,
                    nombre,
                    apellido,
                    dui,
                    telefono,
                })
                res.redirect('/admins')
            }
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },
}

module.exports = adminController

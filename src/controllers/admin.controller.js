const { Usuario, Administrador } = require('./../models/')

const adminController = {
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
    add: async (req, res) => {
        try {
            const { alias, email, password, nombre, apellido, dui, telefono } = req.body
            const usuario = await Usuario.create({ nombre: alias, email, password, isAdmin: true })
            const admin = await Administrador.create({
                UsuarioId: usuario.id,
                nombre,
                apellido,
                dui,
                telefono,
            })
            res.redirect('/admins')
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },
}

module.exports = adminController

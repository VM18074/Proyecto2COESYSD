const { Usuario, Administrador } = require('./../models/')

const adminController = {
    index: async (req, res) => {
        res.render('administrador/index')
    },
    add: async (req, res) => {
        try {
            const { alias, email, password, isAdmin, nombre, apellido, dui, telefono } = req.body
            const usuario = await Usuario.create({ nombre: alias, email, password, isAdmin })
            const admin = await Administrador.create({
                UsuarioId: usuario.id,
                nombre,
                apellido,
                dui,
                telefono,
            })
            res.status(200).send('Consulta creada con exito')
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },
}

module.exports = adminController

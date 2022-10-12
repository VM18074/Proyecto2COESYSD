const { id, institucion } = require('./../models/institucion')
const adminSignUpMailer = require('../templates/instSignUpMailer')
const generatePassword = require('../utils/generatePassword')

const adminController = {
    // retorna todos los administradores
    index: async (req, res) => {
        const data = await Usuario.findAll({
            where: {
                isInst: true,
            },
            include: Institucion,
            raw: true,
            nest: true,
        })

        res.render('institucion/index', { dataRows: data })
    },

    // permite agregar un nuevo adminstrador a la base de datos
    add: async (req, res) => {
        try {
            const { id, nombre, email, direccion } = req.body
            const password = generatePassword()

            const oldId = await Id.findOne({
                where: {
                    email,
                },
            })

            const oldInst = await Institucion.findOne({
                where: {
                    direccion,
                },
            })
            if (oldId) {
                req.flash('error_msg', 'Ya existe un Usuario con el mismo ID')
                res.redirect('/inst')
                return
            } else if (oldInst) {
                req.flash('error_msg', 'La direccion ya ha sido registrada')
                res.redirect('/inst')
            } else {
                const id = await Id.create({ nombre, email, direccion, isInst: true })
                const inst = await Institucion.create({
                    id: id.id,
                    nombre,
                                     
                })
                
                req.flash('success_msg', 'Institución agregado correctamente!')
                adminSignUpMailer(nombre, email)
                res.redirect('/admins')
            }
        } catch (err) {
            console.log(err)

            req.flash('error_msg', 'Ah ocurrido un error!!')
            res.status(500).json(err)
        }
    },
    //permite eliminar un administrador de la base de datos
    delete: async (req, res) => {
        try {
            let id = req.params.id
            const user = await Usuario.findOne({ where: { id: id } })
            await user.destroy()

            req.flash('success_msg', 'Administrador eliminado correctamente')
            res.redirect('/admins')
        } catch (err) {
            console.log(err)

            req.flash('error_msg', 'Lo siento, ha ocurrido un error al momento de eliminar el administrador')
            res.redirect('/admins')
        }
    },
    //permite editar un administrador de la base de datos
    edit: async (req, res) => {
        try {
            let id = req.params.id
            const user = await Administrador.findOne({
                where: {
                    UsuarioId: id,
                },
                raw: true,
            })
            res.render('administrador/edit', { user })
        } catch (err) {
            console.log(err)
            res.redirect('/admins')
        }
    },
    //permite actualizar un administrador de la base de datos
    update: async (req, res) => {
        try {
            let id = req.params.id
            const { alias, email, password, nombre, apellido, dui, telefono } = req.body
            const user = await Usuario.findOne({ where: { id: id } })
            user.nombre = alias
            user.email = email
            user.password = password
            await user.save()
            const admin = await Administrador.findOne({ where: { UsuarioId: id } })
            admin.nombre = nombre
            admin.apellido = apellido
            admin.dui = dui
            admin.telefono = telefono
            await admin.save()

            req.flash('success_msg', 'Administrador actualizado correctamente')
            res.redirect('/admins')
        } catch (err) {
            console.log(err)

            req.flash('error_msg', 'No es posible actualizar el administrador')
            res.redirect('/admins')
        }
    },
}

module.exports = adminController

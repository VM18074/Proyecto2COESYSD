const { Usuario, Empleado } = require('../models')
const bcryptjs = require('bcryptjs') //Encriptar password en bd
const generatePassword = require('../utils/generatePassword')

const sendEmail = require('../mailer/index')
const adminTemplate = require('../mailer/templates/adminSignUpMailer')
const empleadoTemplate = require('../mailer/templates/empleadoSignUpMailer')
const resetPasswordTemplate = require('../mailer/templates/resetPasswordMailer')

const userController = {
    // retorna todos los Usuarios
    index: async (req, res) => {
        const data = await Usuario.findAll({
            include: Empleado,
            raw: true,
            nest: true,
        })

        res.render('usuario/index', { dataRows: data })
    },

    // permite agregar un nuevo usuario a la base de datos
    add: async (req, res) => {
        try {
            const { alias, email, nombre, apellido, dui, telefono, rol } = req.body

            const oldUser = await Usuario.findOne({
                where: {
                    email,
                },
            })

            const oldEmp = await Empleado.findOne({
                where: {
                    dui,
                },
            })
            if (oldUser) {
                req.flash('error_msg', 'Ya existe un Usuario con el mismo Correo')
                res.redirect('/users')
                return
            } else if (oldEmp) {
                req.flash('error_msg', 'Ya existe un Usuario con el mismo DUI')
                res.redirect('/users')
            } else {
                const password = generatePassword()
                const passwordSave = password
                let passwordBD = await bcryptjs.hash(passwordSave, 12)

                const usuario = await Usuario.create({
                    nombre: alias,
                    RolName: rol,
                    email,
                    password: passwordBD,
                })
                await Empleado.create({
                    UsuarioId: usuario.id,
                    nombre,
                    apellido,
                    dui,
                    telefono,
                })

                console.log(passwordSave)
                req.flash('success_msg', 'Usuario agregado correctamente')
                if (rol === 'administrador') {
                    sendEmail(nombre, email, passwordSave, adminTemplate)
                } else {
                    sendEmail(nombre, email, passwordSave, empleadoTemplate)
                }
                res.redirect('/users')
            }
        } catch (err) {
            console.log(err)

            req.flash('error_msg', 'Ha ocurrido un error')
            res.status(500).json(err)
        }
    },
    //permite eliminar un Usuario de la base de datos
    delete: async (req, res) => {
        try {
            let id = req.params.id
            const user = await Usuario.findOne({ where: { id: id } })
            await user.destroy()

            req.flash('success_msg', 'Usuario eliminado correctamente')
            res.redirect('/users')
        } catch (err) {
            console.log(err)

            req.flash('error_msg', 'Lo siento, ha ocurrido un error al momento de eliminar el Usuario')
            res.redirect('/users')
        }
    },
    //permite editar un Usuario de la base de datos
    edit: async (req, res) => {
        try {
            let id = req.params.id
            const user = await Usuario.findOne({
                where: {
                    id,
                },
                include: Empleado,
                raw: true,
                nest: true,
            })
            res.render('usuario/edit', { user })
        } catch (err) {
            console.log(err)
            res.redirect('/users')
        }
    },
    //permite actualizar un usuario de la base de datos
    update: async (req, res) => {
        try {
            let id = req.params.id
            const { alias, email, password, nombre, apellido, dui, telefono, rol } = req.body
            const user = await Usuario.findOne({ where: { id: id } })
            user.nombre = alias
            user.email = email
            user.password = password
            user.RolNombre = rol ? rol : null
            await user.save()
            const admin = await Empleado.findOne({ where: { UsuarioId: id } })
            admin.nombre = nombre
            admin.apellido = apellido
            admin.dui = dui
            admin.telefono = telefono
            await admin.save()

            req.flash('success_msg', 'usuario actualizado correctamente')
            res.redirect('/users')
        } catch (err) {
            console.log(err)

            req.flash('error_msg', 'No es posible actualizar el Usuario')
            res.redirect('/users')
        }
    },

    resetPasswordView: (req, res) => {
        res.render('usuario/resetPassword')
    },

    resetPassword: async (req, res) => {
        try {
            const { email } = req.body
            let password = generatePassword()

            const user = await Usuario.findOne({
                where: {
                    email,
                },
            })
            if (user.email === email) {
                user.password = password

                await user.save()
                sendEmail('', email, password, resetPasswordTemplate)
            }
            res.redirect('/')
        } catch (e) {
            res.status(500).json(e)
        }
    },
}

module.exports = userController

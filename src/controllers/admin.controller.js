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
                req.flash('error_msg', 'Ya existe un Usuario con el mismo Correo')
                res.redirect('/admins')
                return
            } else if (oldAdmin) {
                req.flash('error_msg', 'Ya existe un administrador con el mismo DUI')
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
                req.flash('success_msg', 'Administrador agregado correctamente')
                res.redirect('/admins')
            }
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },
    //permite eliminar un administrador de la base de datos
    delete: async (req, res) => {
        try{
            let id = req.params.id
            const user= await Usuario.findOne({ where: { id:id }})
            await user.destroy()
            res.redirect('/admins')
        }catch(err){
            console.log(err)
            res.redirect('/admins')
        }

    },
    //permite editar un administrador de la base de datos
    edit: async (req, res) => {
        try{
            let id = req.params.id;
            const user= await Administrador.findOne({ where: { UsuarioId:id },
                raw:true, 
            })
            res.render('administrador/edit', {user})
        }catch(err){
            console.log(err)
            res.redirect('/admins')
        }
    },
    //permite actualizar un administrador de la base de datos
    update: async (req, res) => {
        try{
            let id = req.params.id
            const { alias, email, password, nombre, apellido, dui, telefono } = req.body
            const user= await Usuario.findOne({ where: { id:id }})
            user.nombre= alias
            user.email= email
            user.password= password
            await user.save()
            const admin= await Administrador.findOne({ where: { UsuarioId:id }})
            admin.nombre= nombre
            admin.apellido= apellido
            admin.dui= dui
            admin.telefono= telefono
            await admin.save()
            res.redirect('/admins')
        }catch(err){
            console.log(err)
            res.redirect('/admins')
        }
    }
    
}

module.exports = adminController

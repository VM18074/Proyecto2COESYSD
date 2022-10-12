const {Institucion} = require('./../models/')


const institucionController = {
    // retorna todas las instituciones
    index: async (req, res) => {
        const data = await Institucion.findAll({
           
            raw: true,
            nest: true,
        })

        res.render('institucion/index', { dataRows: data })
    },

    // permite agregar una nueva institución a la base de datos
    add: async (req, res) => {
        try {
            const { id, name, email, direccion } = req.body           

            const oldId = await Institucion.findOne({
                where: {
                    email,
                },
            })
          
            if (oldId) {
                req.flash('error_msg', 'Ya existe un Usuario con el mismo correo')
                res.redirect('/institucion')
                return
            } else {
                const id = await Institucion.create({ name, email, direccion})
                
                   
                
                
                req.flash('success_msg', 'Institución agregado correctamente!')               
                res.redirect('/institucion')
            }
        } catch (err) {
            console.log(err)

            req.flash('error_msg', 'Ah ocurrido un error!!')
            res.status(500).json(err)
        }
    },
    //permite eliminar una institución de la base de datos
    delete: async (req, res) => {
        try {
            let id = req.params.id
            const user = await Usuario.findOne({ where: { id: id } })
            await user.destroy()

            req.flash('success_msg', 'Institución eliminada correctamente')
            res.redirect('/admins')
        } catch (err) {
            console.log(err)

            req.flash('error_msg', 'Lo siento, ha ocurrido un error al momento de eliminar la institución')
            res.redirect('/admins')
        }
    },
    //Permite editar una institución de la base de datos
    edit: async (req, res) => {
        try {
            let id = req.params.id
            const user = await Institucion.findOne({
                where: {
                    UsuarioId: id,
                },
                raw: true,
            })
            res.render('institucion/edit', { user })
        } catch (err) {
            console.log(err)
            res.redirect('/institucion')
        }
    },
    //permite actualizar una institución a la base de datos
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

            req.flash('success_msg', 'Institucion actualizado correctamente')
            res.redirect('/institucion')
        } catch (err) {
            console.log(err)

            req.flash('error_msg', 'No es posible actualizar la institucion')
            res.redirect('/institucion')
        }
    },
}

module.exports = institucionController

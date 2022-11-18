const {Institucion} = require('./../models/')

const institucionController = {
    // Retorna todas las instituciones.
    index: async (req, res) => {
        const data = await Institucion.findAll({
           
            raw: true,
            nest: true,
        })
        req.session.loggedin=true;
        req.session.admin=true;
        res.render('institucion/index', { dataRows: data,admin: req.session.admin,logueado: req.session.loggedin  })
    },

    // Permite agregar una nueva institución a la base de datos.
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
    // Permite eliminar una institución de la base de datos.
    delete: async (req, res) => {
        try {
            let id = req.params.id
            const inst = await Institucion.findOne({ where: { id: id } })
            await inst.destroy()

            req.flash('success_msg', 'Institución eliminada correctamente')
            res.redirect('/institucion')
        } catch (err) {
            console.log(err)

            req.flash('error_msg', 'Lo siento, ha ocurrido un error al momento de eliminar la institución')
            res.redirect('/institucion')
        }
    },
    // Permite editar una institución de la base de datos.
    edit: async (req, res) => {
        try {
            let id = req.params.id
            const user = await Institucion.findOne({
                where: {
                    id: id,
                },
                raw: true,
            })
            
            res.render('institucion/edit', { user})
        } catch (err) {
            console.log(err)
            res.redirect('/institucion')
        }
    },
    // Permite actualizar una institución a la base de datos.
    update: async (req, res) => {
        try {
            let id = req.params.id
            const {name, direccion} = req.body
            const inst = await Institucion.findOne({ where: { id: id } })
            inst.name = name
            inst.direccion = direccion
            await inst.save()
            console.log(inst);

            req.flash('success_msg', 'Institucion actualizado correctamente')
            res.redirect('/institucion')
        } catch (err) {
            console.log(err)

            req.flash('error_msg', 'No es posible actualizar la institucion')
            res.redirect('/institucion')
        }
    },
}

    // Permite enviar informe.
    enviarInforme: async (req, res) => {
        try {
            let id = req.params.id
            const user = await Institucion.findOne({
                where: {
                    id: id,
                },
                raw: true,
            })

            res.render('institucion/enviarInforme', { user})
        } catch (err) {
            console.log(err)
            res.redirect('/institucion')
        }   
    }, // Fin permite enviar informe.

module.exports = institucionController
const { Alerta, Daño, Medida, Ubicacion } = require('../models')



const alertaController = {
    // retorna todos los Usuarios
    index: async (req, res) => {
       const data = await Alerta.findAll({
        include: [{
            model: Daño,
            
        }, {
            model: Medida,
          
        },  
        {
            model: Ubicacion,
          
        }],
        raw: true,
            nest: true,
        })
        req.session.loggedin=true;
        req.session.admin=true;

        res.render('alerta/index', {dataRows:data, admin: req.session.admin,logueado: req.session.loggedin })
    },

    indexAmin: async (req, res) => {
        const data = await Alerta.findAll({
            include: [{
                model: Daño,
                
            }, {
                model: Medida,
              
            },  
            {
                model: Ubicacion,
              
            }],
            raw: true,
                nest: true,
            })
<<<<<<< HEAD
            req.session.loggedin=true;
            req.session.admin=true;
 
         res.render('alerta/admin/index', {dataRows:data, admin: req.session.admin,logueado: req.session.loggedin })
=======
       
            if(req.session.loggedin==true && req.session.admin==true){
                res.render('alerta/admin/index', {dataRows:data})
            }else{
                res.render('home/index')
            }
         
>>>>>>> 0670d8d97d3d7b07abe38d9ee1357f3202a975fc
     },
 

    // permite agregar un nuevo usuario a la base de datos
    add: async (req, res) => {
        try {
            const { nombre, descripcion, activo, nombreD, descripcionD, nombreM, descripcionM, coordenada, departamento, municipio } = req.body
            var esActivo;
                if(activo==null){
                    esActivo=0;
                }else{
                    esActivo=1;
                }
                const alerta = await Alerta.create({
                    nombre: nombre,
                    descripcion: descripcion,
                    activo: esActivo,
                })
                await Daño.create({
                    alertumId: alerta.id,
                    nombre: nombreD,
                    descripcion: descripcionD,
                })
                await Medida.create({
                    alertumId: alerta.id,
                    nombre: nombreM,
                    descripcion: descripcionM,
                })
                await Ubicacion.create({
                    alertumId: alerta.id,
                    coordenada: coordenada,
                    departamento: departamento,
                    municipio: municipio,
                })

                req.flash('success_msg', 'Alerta registrada correctamente')

                res.redirect('/alerta')
            
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
            const alerta = await Alerta.findOne({ where: { id: id } })
            await alerta.destroy()

            req.flash('success_msg', 'Alerta eliminada correctamente')
            res.redirect('/alerta')
        } catch (err) {
            console.log(err)

            req.flash('error_msg', 'Lo siento, ha ocurrido un error al momento de eliminar la alerta')
            res.redirect('/alerta')
        }
    },
    //permite editar un Usuario de la base de datos
    edit: async (req, res) => {
        try {
            let id = req.params.id
            const alerta = await Alerta.findOne({
                where: {
                    id,
                },
                include: [{
                    model: Daño,
                    
                }, {
                    model: Medida,
                  
                },  
                {
                    model: Ubicacion,
                  
                }],
                raw: true,
                nest: true,
            })
            req.session.loggedin=true;
        req.session.admin=true;
            res.render('alerta/edit', { alerta, admin: req.session.admin,logueado: req.session.loggedin  })
        } catch (err) {
            console.log(err)
            res.redirect('/alerta')
        }
    },
    update: async (req, res) => {
        try {
            let id = req.params.id
            const { nombre, descripcion, activo, nombreD, descripcionD, nombreM, descripcionM, coordenada, departamento, municipio } = req.body
            const alerta = await Alerta.findOne({ where: { id: id } })
            alerta.nombre = nombre
            alerta.descripcion = descripcion
            await alerta.save()
            const daño = await Daño.findOne({ where: { alertumId: id } })
            daño.nombre = nombreD
            daño.descripcion = descripcionD
            await daño.save()
            const medida = await Medida.findOne({ where: { alertumId: id } })
            medida.nombre = nombreM
            medida.descripcion = descripcionM
            await medida.save()

            const ubicacion = await Ubicacion.findOne({ where: { alertumId: id } })
            ubicacion.coordenada = coordenada
            ubicacion.departamento = departamento
            ubicacion.municipio = municipio
            await ubicacion.save()
            req.flash('success_msg', 'Alerta actualizado correctamente')
            res.redirect('/alerta')
        } catch (err) {
            console.log(err)

            req.flash('error_msg', 'No es posible actualizar la alerta')
            res.redirect('/alerta')
        }
    },

    //permite aprobar una alerta
    aprobar: async (req, res) => {
        try {
            let id = req.params.id
            const alerta = await Alerta.findOne({
                where: {
                    id,
                },
                raw: true,
                nest: true,
            })
            req.session.loggedin=true;
        req.session.admin=true;
            res.render('alerta/admin/aprobarAlerta', { alerta,admin: req.session.admin,logueado: req.session.loggedin  })
        } catch (err) {
            console.log(err)
            res.redirect('/alerta')
        }
    },

    activarD: async (req, res) => {
        try {
            let id = req.params.id
            const { activo, nivelAlerta } = req.body
            const alerta = await Alerta.findOne({ where: { id: id } })
            var esActivo;
                if(activo==null){
                    esActivo=0;
                    alerta.activo = esActivo
                 alerta.nivelAlerta = "No posee"
            await alerta.save()
                }else{
                    esActivo=1;
                    alerta.activo = esActivo
                    alerta.nivelAlerta = nivelAlerta
                    await alerta.save()
                }
            
            req.flash('success_msg', 'Alerta actualizado correctamente')
            res.redirect('/alerta/admin')
        } catch (err) {
            console.log(err)

            req.flash('error_msg', 'No es posible Activar/Desactivar la alerta')
            res.redirect('/alerta/admin')
        }
    },

    


}

module.exports = alertaController

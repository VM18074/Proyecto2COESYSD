const { Alerta, Daño, Medida, Ubicacion } = require('../models')
const PDF = require('pdfkit'); // Generar informes PDFkit.
const fs = require('fs'); // Generar informes.

const alertaController = {
    // Retorna todas las Alertas.
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
            res.render('alerta/admin/index', {dataRows:data, admin: req.session.admin,logueado: req.session.loggedin })
     },
 
    // Permite agregar una nueva alerta a la base de datos.
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
    // Permite eliminar una Alerta de la base de datos.
    delete: async (req, res) => {
        try {
            let id = req.params.id
            const alerta = await Alerta.findOne({ where: { id: id } })
            await alerta.destroy()

            req.flash('success_msg', 'Alerta eliminada correctamente')
            res.redirect('/alerta/admin')
        } catch (err) {
            console.log(err)

            req.flash('error_msg', 'Lo siento, ha ocurrido un error al momento de eliminar la alerta')
            res.redirect('/alerta/admin')
        }
    },
    // Permite editar una Alerta de la base de datos.
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

    // Permite aprobar una alerta.
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
            
            res.render('alerta/admin/aprobarAlerta', { alerta,admin: req.session.admin,logueado: req.session.loggedin  })
        } catch (err) {
            console.log(err)
            res.redirect('/alerta/admin')
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

    // Generar informes.
    infor: async (req, res) => {

        // Crear un documento.
        const doc = new PDF({bufferPage: true});

        // Formato fecha. (opcional de momento)
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); 
        var yyyy = today.getFullYear();
        today = mm + '-' + dd + '-' + yyyy;

        // Formato hora. (opcional de momento)
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var segundos = date.getSeconds();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; 
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + '-' + minutes + '-' + segundos + ' ' + ampm;

        const filename = `Informe_${today}_${strTime}.pdf`;

        const stream = res.writeHead(200, {
            'Content-Type': 'application/pdf',
            'Content-disposition': `attachment;filename=${filename}`
        });

        doc.on(Event = 'data', listener = (data) => {stream.write(data)});
        doc.on(Event = 'end', listener = () => {stream.end()});

        doc.text('Hola mundo con PDF kit', 30, 30);

        doc.end();
    } // Fin generar informes.  
}

module.exports = alertaController
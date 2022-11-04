const { Alerta, Daño, Medida, Ubicacion } = require('../models')
//const {dateLit} = require ('../helpers/handlebars'); // Sustituir por cuando se encuentre solución
const PDF = require('pdfkit-construct'); // Generar informes PDFkit. 

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

        /*let pedido = await Pedido.find(req.params.id); // Base de datos (No tiene función).
        pedido = pedido[0]; // Base de datos (No tiene función).

        let cliente = await Pedido.findCliente(pedido[0].cliente_id); // Base de datos (No tiene función).
        cliente = cliente[0]; // Base de datos (No tiene función).*/

        // Crear un documento.
        const doc = new PDF({bufferPage: true});

        // Formato fecha. (opcional de momento)
        var esteDia = new Date();
        var dd = String(esteDia.getDate()).padStart(2, '0');
        var mm = String(esteDia.getMonth() + 1).padStart(2, '0'); 
        var yyyy = esteDia.getFullYear();
        esteDia = mm + '-' + dd + '-' + yyyy;

        // Formato hora. (opcional de momento)
        var hora = new Date();
        var horas = hora.getHours();
        var minutos = hora.getMinutes();
        var segundos = hora.getSeconds();
        var ampm = horas >= 12 ? 'pm' : 'am';
        horas = horas % 12;
        horas = horas ? horas : 12; 
        minutos = minutos < 10 ? '0'+ minutos : minutos;
        var strTiempo = horas + '-' + minutos + '-' + segundos + ' ' + ampm;

        const filename = `Informe_${esteDia}_${strTiempo}.pdf`;
        const fechaHoy = ` ${esteDia}_${strTiempo}`; // Instrucción temporal.

        const stream = res.writeHead(200, {
            'Content-Type': 'application/pdf',
            'Content-disposition': `attachment;filename=${filename}`
        });

        doc.on(Event = 'data', listener = (data) => {stream.write(data)});
        doc.on(Event = 'end', listener = () => {stream.end()});

        // Establecer el encabezado para que se represente en cada página.
        doc.setDocumentHeader(options = {

            height: '16%'
        
        }, renderCallback = () => {

            doc.fontSize(15).text('Informe', { // Sustituir por cuando se encuentre solución (`FACTURA ${dateLit(pedido.id)}`)
                with: 420,
                align: 'center'
            });

            doc.fontSize(12);
            
            doc.text('Información', { // Sustituir por cuando se encuentre solución `NIT: ${cliente.NIT}`
                with: 420,
                align: 'left'
            });
            doc.text('sobre el sistema', { // Sustituir por cuando se encuentre solución `Sr(a). ${cliente.nombre}`
                with: 420,
                align: 'left'
            });
            doc.text('de evaluacion de daños', { // Sustituir por cuando se encuentre solución `Fecha: ${pedido.fecha_pedido}`
                with: 420,
                align: 'left'
            });
        } );

        /*const platos = await Pedido.getPedidoPlatos(pedido.id); // Base de datos (No tiene función).

        const registros = platos.map((plato) => { // Base de datos (No tiene función).

            const registro = {

                nombre: Alerta.nombre,                         // Tabla alerta columna nombre.
                descripcion: Alerta.descripcion,               // Tabla alerta columna descripcion.
                activo: Alerta.activo,                         // Tabla alerta columna activo.
                dañoNombre: Daño.nombre,                       // Tabla daños columna nombre.
                nivelAlerta: Alerta.nivelAlerta,               // Tabla alerta columna nilverAlerta.
                ubicacionDepartamento: Ubicacion.departamento, // Tabla ubicacions columna departamento.
                ubicacionMunicipio: Ubicacion.municipio,       // Tabla ubicacions columna municipio.
                medidaNombre: Medida.nombre,                   // Tabla medidas columna nombre.               
            }

            return registro;

        });*/

        const informesG = [
            {
                nombre: 'Et',
                descripcion: 'charque',
                activo: 1,
                dañoNombre: 'Minus',
                nivelAlerta: 'verde',
                ubicacionDepartamento: ' Ahuachapán',
                ubicacionMunicipio: 'Apaneca',
                medidaNombre: 'Ut',
            },
            {
                nombre: 'Sunt',
                descripcion: 'sopa de mani',
                activo: 0,
                dañoNombre: 'Incidunt',
                nivelAlerta: 'amarilla',
                ubicacionDepartamento: 'Santa Ana',
                ubicacionMunicipio: 'Candelaria de la Frontera',
                medidaNombre: 'Sint',
            }
        ]

        // Agregar una tabla (puede agregar varias tablas con diferentes columnas).
        // Asegúrese de que cada columna tenga una clave. Las claves deben ser únicas.
        doc.addTable(columns = [
            
            {key: 'nombre', label: 'Nombre', align: 'left'},
            {key: 'descripcion', label: 'Descripcion', align: 'left'},
            {key: 'activo', label: 'Activo', align: 'left'},
            {key: 'dañoNombre', label: 'Daños', align: 'left'},
            {key: 'nivelAlerta', label: 'Nivel', align: 'right'},
            {key: 'ubicacionDepartamento', label: 'Departamento', align: 'left'},
            {key: 'ubicacionMunicipio', label: 'Municipio', align: 'left'},
            {key: 'medidaNombre', label: 'Respuesta', align: 'left'},
        ], informesG, options = { // Sustituir por "registro" cuando se encuentre solución.

            border: null,
            width: "fill_body",
            striped: true,
            stripedColors: ["#f6f6f6", "#d6c4dd"],
            cellsPadding: 10,
            marginLeft: 45,
            marginRight: 45,
            headAlign: 'left'

        } );

        doc.setDocumentFooter(options =  {
            
            height: '60%'

        }, renderCallback = () => {

            doc.fontSize(10).text(`Informe del ${fechaHoy}`, doc.footer.x + 50, doc.footer.y + 10); // Sustituir por cuando se encuentre solución `TOTAL: ${pedido.total} Dolares`
        });

        // Tablas de renderizado.
        doc.render();

        doc.end();
    } // Fin generar informes.  
}

module.exports = alertaController
const { Alerta, Daño, Medida, Ubicacion } = require('../models')

const homeController = {
    // Retorna todos los Usuarios.
    index: async (req, res) => {
        const data = await Alerta.findAll({
            where: {
                activo: true,
            },
            include: [
                {
                    model: Daño,
                },
                {
                    model: Medida,
                },
                {
                    model: Ubicacion,
                },
            ],
            raw: true,
            nest: true,
        })

        res.render('home/index', { dataRows: data,admin: req.session.admin,logueado: req.session.loggedin })
    },
}

module.exports = homeController
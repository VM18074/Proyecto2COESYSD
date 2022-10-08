const { Usuario } = require('./../models/')
const generatePassword = require('../utils/generatePassword')
const resetPasswordMailer = require('../templates/resetPasswordMailer')

const userController = {
    index: (req, res) => {
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
                resetPasswordMailer(email, password)
            }
            res.redirect('/')
        } catch (e) {
            res.status(500).json(e)
        }
    },
}

module.exports = userController

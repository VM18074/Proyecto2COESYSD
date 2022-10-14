const mailer = require('nodemailer')
const canSendEmail = false

function sendEmail(name, receiver, password, template) {
    let transporter = mailer.createTransport({
        service: 'hotmail',
        auth: {
            user: '@yahoo.com',
            pass: 'Universidaddeelsalvador@1',
        },
    })

    if (!canSendEmail) {
        console.log('no esta permitido enviar emails')
    } else {
        transporter.sendMail(template(name, receiver, password), function (error, info) {
            if (error) {
                console.log(error)
            } else {
                console.log('Email sent: ' + info.response)
            }
        })
    }
}

module.exports = sendEmail

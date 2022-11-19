const mailer = require('nodemailer')
// Cambie esta variable para poder enviar emails.
const canSendEmail = true // true para poder enviar emails.

function sendEmail(name, receiver, password, file, template) {
    let transporter = mailer.createTransport({
        service: 'hotmail',
        auth: {
            user: 'coesysd@hotmail.com',
            pass: 'Universidaddeelsalvador@1',
        },
    })

    if (!canSendEmail) {
        console.log('No esta permitido enviar emails')
    } else {
        transporter.sendMail(template(name, receiver, password, file), function (error, info) {
            if (error) {
                console.log(error)
            } else {
                console.log('Email sent: ' + info.response)
            }
        })
    }
}

module.exports = sendEmail
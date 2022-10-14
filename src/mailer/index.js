const mailer = require('nodemailer')
// cambie esta variable para poder enviar emails
const canSendEmail = false // true para poder enviar emails

function sendEmail(name, receiver, password, template) {
    let transporter = mailer.createTransport({
        service: 'hotmail',
        auth: {
            user: 'coesysd@hotmail.com',
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

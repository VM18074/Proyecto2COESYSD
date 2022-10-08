const mailer = require('nodemailer')

function sendMail(name, receiver, password) {
    let transporter = mailer.createTransport({
        service: 'hotmail',
        auth: {
            user: 'proyectoCOESYSD@hotmail.com',
            pass: 'Universidaddeelsalvador@1',
        },
    })

    let mailOptions = {
        from: 'ProyectoCOESYSD <proyectoCOESYSD@hotmail.com>',
        to: receiver,
        subject: 'Cuenta de administrador',
        html: `
        <div
            style="
                display: flex;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                justify-content: center;
                align-items: center;
            "
        >
            <table style="width:100%" role="presentation">
                <tr>
                    <th>
                        <h1 style="margin: 0; padding: 3rem 1rem; color: white; background-color: rgb(39, 142, 13)">
                            Cuenta de Administrador Creada con éxito
                        </h1>
                    </th>
                </tr>
                <tr>
                    <td style="font-size: 1.2em">
                        <p>Hola <strong>${name}</strong></p>
                        <p>Tus credenciales de Administrador son las siguientes:</p>
                        <p>Correo: <strong>${receiver}</strong></p>
                        <p>Contraseña: <strong>${password}</strong></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Feliz dia te desea el equipo del proyecto de COESYSD</p>
                    </td>
                </tr>
            </table>
        </div>

        
        `,
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            res.json(error)
        } else {
            console.log('Email sent: ' + info.response)
            res.send('funciona')
        }
    })
}

module.exports = sendMail

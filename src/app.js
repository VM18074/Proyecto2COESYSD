//constantes a usar

const express = require('express')
const { engine } = require('express-handlebars')

const Handlebars = require('express-handlebars')
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')

const Sequelize = require('sequelize')
const DataTypes = require('sequelize')

const bodyParser = require('body-parser')
const mysql = require('mysql')

//Librerias para login
const session = require('express-session') //sesiones
//const { redirect } = require('express/lib/response');

//requeri('../db');  para vincular si se quiere manejar config de db aparte

//puerto para el servidor
const app = express()
app.set('port', 4000)

//utlizar bodyparse para recibir metodos post y get
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.use(bodyParser.json())

//Definicion para ejecutar vistas
app.set('views', __dirname + '/views')
app.engine(
    '.hbs',
    engine({
        extname: '.hbs',
    })
)
app.set('view engine', 'hbs')

//conexion bd

//conexion con sequelize segundo paso
const sequelize = new Sequelize('edandb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})

//apetura de servidor
app.listen(app.get('port'), () => {
    console.log(`servidor: http://localhost:${app.get('port')}`)
})

//Creacion de sesiones para login

//habilitar uso de rutas
app.use('/', require('./routes/admin.route'))

//mostrar pagina principal al entrar al servidor

//vinculación de modelos a DB

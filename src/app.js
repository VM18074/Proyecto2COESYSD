//constantes a usar

const express = require('express')
const { engine } = require('express-handlebars')

const path = require('path')
const Handlebars = require('express-handlebars')
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')
const db = require('./models')
const Sequelize = require('sequelize')
const DataTypes = require('sequelize')

const bodyParser = require('body-parser')
const mysql = require('mysql')
const flash = require('connect-flash')

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

app.use(
    session({
        secret: 'secrect',
        resave: true,
        saveUninitialized: true,
    })
)
app.use(flash())

// variables globales
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    next()
})

//Definicion para ejecutar vistas
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.engine(
    '.hbs',
    engine({
        extname: '.hbs',
        partialsDir: path.join(__dirname, 'views', 'partials'),
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
app.use('/', require('./routes/user.route'))

//mostrar pagina principal al entrar al servidor
app.get('/', (req, res) => {
    res.render('administrador/index')
})
//vinculación de modelos a DB

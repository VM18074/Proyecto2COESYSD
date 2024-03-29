var puerto=process.env.PORT || 4000;
// Constantes a usar.
'use strict'
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

// Librerias para login.
const session = require('express-session') // Sesiones.
var SequelizeStore = require("connect-session-sequelize")(session.Store); //agregamos esta linea
//const { redirect } = require('express/lib/response');

//requeri('../db');  Para vincular si se quiere manejar config de db aparte.

// Puerto para el servidor.
const app = express()
app.set('port', puerto)

// Utlizar bodyparse para recibir metodos post y get.
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.use(bodyParser.json())

// Conexion bd

// Conexion con sequelize segundo paso.
const sequelize = new Sequelize('dfmzkywdqncqxd4i', 'x5vg5cn4u5rgloi7', 'zfljidnl1d1t0lpy', {
    host: 'y5s2h87f6ur56vae.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    dialect: 'mysql',
    //storage: "./session.mysql",
});

var myStore = new SequelizeStore({
    db: sequelize,
  });
app.use(
    session({
        /*cookie:{
            secure: true,
            maxAge:60000
        },*/
        //store: myStore, //agregamos esta linea
        secret: 'secrect',
        resave: false,
        saveUninitialized: true,
    })
)
//myStore.sync();
app.use(flash())

// Variables globales.
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    next()
})

// Definicion para ejecutar vistas.
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



// Apetura de servidor.

app.listen(app.get('port'), () => {
    console.log(`servidor: http://localhost:${app.get('port')}`)
})
// Creacion de sesiones para login.

// Habilitar uso de rutas.
app.use('/', require('./routes/user.route'))
app.use('/', require('./routes/home.route'))
app.use('/', require('./routes/alerta.route'))
app.use('/', require('./routes/login.route'))
app.use('/', require('./routes/inst.route'))
// Vinculación de modelos a DB.

const { Usuario } = require('./../models/')

const loginController={
    index:(req, res) => {   
    res.render('login/index')
    },

}                                                                                                                          

module.exports = loginController
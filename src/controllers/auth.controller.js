const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const keys = require('../settigns/keys')


app.set('key', keys.key)

const login = async (req, res) => {
    const user = req.body.user
    const pass = req.body.pass
    if(user == 'jose' && pass == '12345'){
        const payload = {
            check:true
        }
        const token = jwt.sign(payload, app.get('key'),{
            expiresIn:'7d'
        })
        res.json({
            message: 'AUTENTICACION EXITOSA',
            token: token
        })
    }else{
        res.json({
            message: 'Usuario o contraseña son incorrectos'
        })
    }
}


module.exports = {
    login
}
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

const verification = async (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']
    if(!token){
        res.status(401).send({
            error: 'Es necesario un token de autenticacion'
        })
        return
    }
    if(token.startsWith('Bearer ')){
        token = token.slice(7, token.length)
        console.log(token);
    }
    if(token){
        jwt.verify(token, app.get('key'), (error, decoded)=> {
            if(error){
                return res.json({
                    message: 'El token no es valido'
                })
            } else {
                req.decoded = decoded
                res.json(
                'todo bien todo correcto'
                )
                next()
            }
        })
    }
}

module.exports = {
    login,
    verification
}
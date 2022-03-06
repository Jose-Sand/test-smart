const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const keys = require('../settigns/keys')
app.set('key', keys.key)


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
                console.log('error :>> ', error);
                return res.status(401).json({
                    message: 'El token no es valido'
                })
            } else {
                req.decoded = decoded
                next()
            }
        })
    }
}

module.exports={
    verification
}
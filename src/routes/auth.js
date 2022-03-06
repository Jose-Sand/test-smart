const { Router } = require('express')
const router = Router()

const { login, verification } = require('../controllers/auth.controller')


router.get('/info', verification )
router.post('/login', login)


module.exports = router
const { Router } = require('express')
const router = Router()

const { getUsers, createUsers, getUsersById, deleteUsers, updateUser } = require('../controllers/user.controller')

router.get('/users', getUsers)
router.get('/users/:id', getUsersById)
router.post('/users', createUsers)
router.delete('/users/:id', deleteUsers)
router.put('/users/:id', updateUser)

module.exports = router
const { Router } = require('express')
const router = Router()

const { getCity, createCity, getCityById, deleteCity, updateCity } = require('../mongodb/index')

router.get('/cities', getCity)
router.get('/cities/:id', getCityById)
router.post('/cities', createCity)
router.delete('/cities/:id', deleteCity)
router.put('/cities/:id', updateCity)

module.exports = router
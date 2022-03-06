const { Router } = require('express')
const { verification } = require('../middleware/jwt')
const router = Router()

const { getVehicules, createVehicules, getVehiculesById, deleteVehicules, updateVehicule } = require('../controllers/vehicule.controller')

router.get('/vehicules',verification, getVehicules)
router.get('/vehicules/:id', getVehiculesById)
router.post('/vehicules', createVehicules)
router.delete('/vehicules/:id', deleteVehicules)
router.put('/vehicules/:id', updateVehicule)

module.exports = router
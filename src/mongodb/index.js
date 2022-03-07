const mongoose = require('mongoose')
const url = 'mongodb://mongo/mongodb_1'


// coneccion db mongoose
mongoose.connect(url, {

})
.then( ()=> console.log('conectado a mongoose db'))
.catch((e)=> console.log('este es el error: ' + e))

const ciudadSchema = mongoose.Schema({
    nombre:String,
    poblacion:Number,
    departamento:String
}, {versionKey: false})

const CiudadModel = mongoose.model('ciudades', ciudadSchema)

//get
const getCity = async (req, res) => {
    const ciudades = await CiudadModel.find()
    res.json(ciudades)
}

//getbyID
const getCityById = async (req, res) => {
    const id = req.params.id
    try {
        const ciudad = await CiudadModel.findById({_id:id})
        res.send(ciudad)
    } catch (error) {
        console.log(error);
    }
    
}

//create
const createCity = async (req,res) => {
    const {nombre, poblacion, departamento} = req.body
    const ciudad = new CiudadModel({
        nombre: nombre,
        poblacion: poblacion,
        departamento: departamento
    })
    const resultado = await ciudad.save()
    res.json({
        message: 'Usser Added Succesfully',
        body: {
            user: {nombre, poblacion, departamento}
        }
    })
    console.log(resultado);
}

// Update
const updateCity = async (req,res) => {
    const id = req.params.id
    const {nombre, poblacion, departamento} = req.body
    try {
        const ciudad = await CiudadModel.updateOne({_id:id},
            {
                $set: {
                    nombre: nombre,
                    poblacion: poblacion,
                    departamento: departamento
                }
            })
            console.log(ciudad);
        res.json('user updated succesfully')
    } catch (error) {
        console.log(error);
    }
    
}

// Delete
const deleteCity = async (req,res) => {
    const id = req.params.id
    try {
        const ciudad = await CiudadModel.deleteOne({_id:id})
        res.send('deleted succesfully')
    } catch (error) {
        console.log(error);
    }
    
}

module.exports = {
    getCity,
    getCityById,
    createCity,
    updateCity,
    deleteCity
}
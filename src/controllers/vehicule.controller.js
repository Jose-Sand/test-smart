const { pool } = require('../database/config')

const getVehicules = async (req,res) => {
    const response = await pool.query('SELECT * FROM vehicules')
    res.status(200).json(response.rows)
 }
 
 const getVehiculesById = async (req, res) => {
     const id = req.params.id
     const response = await pool.query(
         'select * from vehicules where id = $1', 
         [id]
         ) 
     res.json(response.rows)
 }
 
 
 const createVehicules = async (req, res) => {
     console.log('si entro');
     const {branch, year} = req.body
     console.log(req.body);
     const response = await pool.query(
         'INSERT INTO vehicules (branch, year) VALUES($1, $2)',
          [branch, year]
         ) 
     //console.log(response);
     res.json({
         message: 'Vehicule Added Succesfully',
         body: {
             user: {branch, year}
         }
     })
 }
 
 const updateVehicule = async (req,res) => {
     const id = req.params.id
     const {branch, year} = req.body
 
     const response = await pool.query( 'update vehicules set branch = $1, year = $2 where id = $3', [
         branch,
         year,
         id
     ])
    console.log(response);
    res.json('vehicule updated succesfully')
 }
 
 
 const deleteVehicules = async (req,res) => {
     const id = req.params.id
     const response = await pool.query(
         'delete from vehicules where id = $1', 
         [id]
         ) 
     res.json(`User ${id} deleted succesfully`)
 }
 
 module.exports = {
     getVehicules,
     getVehiculesById,
     createVehicules,
     updateVehicule,
     deleteVehicules
 }
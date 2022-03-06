const { pool } = require('../controllers/index.controller')

const getUsers = async (req,res) => {
    const response = await pool.query('SELECT * FROM users')
    res.status(200).json(response.rows)
 }
 
 const getUsersById = async (req, res) => {
     const id = req.params.id
     const response = await pool.query(
         'select * from users where id = $1', 
         [id]
         ) 
     res.json(response.rows)
 }
 
 
 const createUsers = async (req, res) => {
     const {name, email} = req.body
     const response = await pool.query(
         'INSERT INTO users (name, email) VALUES($1, $2)',
          [name, email]
         ) 
     console.log(response);
     res.json({
         message: 'Usser Added Succesfully',
         body: {
             user: {name, email}
         }
     })
 }
 
 const updateUser = async (req,res) => {
     const id = req.params.id
     const {name, email} = req.body
 
     const response = await pool.query( 'update users set name = $1, email = $2 where id = $3', [
         name,
         email,
         id
     ])
    console.log(response);
    res.json('user updated succesfully')
 }
 
 
 const deleteUsers = async (req,res) => {
     const id = req.params.id
     const response = await pool.query(
         'delete from users where id = $1', 
         [id]
         ) 
     res.json(`User ${id} deleted succesfully`)
 }
 
 module.exports = {
     getUsers,
     getUsersById,
     createUsers,
     updateUser,
     deleteUsers
 }
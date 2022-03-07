const express = require('express')
const app = express()
require('./mongodb')


//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))


// routes
app.use(require('./routes/index'))
app.use(require('./routes/auth'))
app.use(require('./routes/cities'))
app.use(require('./routes/routesVehicules'))

app.listen(3000)
console.log('server on port 3000');
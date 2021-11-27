require("dotenv").config()
require('../db/dbConnection')
const express = require("express")
const app = express()
const cors = require('cors')
const adminsRoutes = require('../routes/admins.routes')
const usersRoutes = require('../routes/users.routes')
const productsRoutes = require('../routes/products.routes')
const ordersRoutes = require('../routes/orders.routes')

app.use(cors())

app.use(express.json())

app.use('/api/admins', adminsRoutes)
app.use('/api/users', usersRoutes)
app.use('/api/products', productsRoutes)
app.use('/api/orders', ordersRoutes)

app.get("*", (req,res)=>{
    res.status(404).send({
        apiStatus:false,
        message:"invalid api link"
    })
})
module.exports = app
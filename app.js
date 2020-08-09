const express = require('express')
const bodyParser = require('body-parser')

const casosRoutes = require('./api/casos')
const app = express ()

app.use(bodyParser.json())

app.use('/api/casos' , casosRoutes)

app.use((req,res, next) => {

})

app.listen(5000, () => console.log('servidor conectado na porta 5000'))

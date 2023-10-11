const express = require('express')
const conectarDB = require('./config/db')
const cors = require('cors')


const app = express()
conectarDB()
app.use(cors())
app.use(express.json())

app.use('/api', require('./routes/routes'))

let puerto = 3000
app.listen(puerto, () => {
    console.log(`La aplicación se esta ejecutando en http://localhost:${puerto}`)
})

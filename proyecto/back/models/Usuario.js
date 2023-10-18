const mongoose = require('mongoose')

const UsuarioSchema = mongoose.Schema({
    nombres: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    contacto: {
        type: Number,
        required: true
    },
    rol: {
        type: String,
        required: true,
        default: 'cliente'
    }
},
    {
        versionKey: false,
        timestamps: true
    })

module.exports = mongoose.model('Usuario', UsuarioSchema)

const mongoose = require('mongoose')

const Productshcema = mongoose.Schema({
    nombreP: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    activo: {
        type: Boolean,
        required: true
    },
    oferta: {
        type: Boolean,
        required: true
    }
},
    {
        versionKey: false,
        timestamps: true
    })

module.exports = mongoose.model('Producto', Productshcema)

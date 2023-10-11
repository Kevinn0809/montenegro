//rutas para usuario
const express = require('express')
const router = express.Router()
const usuarioController = require('../controllers/usuario.controller')

router.post('/usuario', usuarioController.crearUsuario)
router.get('/obtener-usuario', usuarioController.obtenerUsuarios)

module.exports = router

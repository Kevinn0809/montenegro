//rutas para usuario
const express = require('express')
const router = express.Router()
const usuarioController = require('../controllers/usuario.controller')
const productoControlador = require('../controllers/producto.controller')
const SessionCOntroler = require('../controllers/sessionController')
const mdJWT = require('../middleware/tokenjwt')

// RUTAS PARA LOS SERVICIOS DE USUARIOS
// Ruta para obtener todos los Usuarios (GET TOTAL) + (VERIFICACION JWT)
router.get('/obtener-usuarios', mdJWT.verificarToken, usuarioController.obtenerUsuarios)
//Ruta para obtener un Solo usuario por su id (GET INDIVIDUAL POR ID )
router.get('/obtenerusuario/:id', mdJWT.verificarToken, usuarioController.obtenerUnUsuario)
//Ruta para Crear ususario (POST)
router.post('/usuario', usuarioController.crearUsuario)
//Ruta para actualizar usuario (PUT)
router.put('/actualizar-usuario/:id', mdJWT.verificarToken, usuarioController.actualizarUsuario)
//Ruta para Borrar o actualizar usuario para que no se muestre en el llamado
router.delete('/eliminar-usuario/:id', mdJWT.verificarToken, usuarioController.eliminarUsuario)

//Rutas para el token JWT

//Ruta post para recepcion de la informacion del body usando el metodo post para creacion del jwt
router.post('/login', SessionCOntroler.generarToken)
//Ruta  post para recepecion del jwt para verificacion de seguridad
router.post('/info-login', SessionCOntroler.desencriptarToken)


//RUTAS PARA LOS SERVICIOS DE PRODUCTOS
//Ruta para obtener todos los Productos (GET TOTAL)
router.get('/obtener-all-productos', mdJWT.verificarToken, productoControlador.ObtenerAllProductos)
//Ruta para obtener un solo producto por su id (GET INDIVIDUAL POR ID)
router.get('/obtenerProducto/:id', productoControlador.ObtenerunSoloProducto)
//Ruta para obtener productos con llave Activo : true
router.get('/productos-disponibles', productoControlador.ObtenerProductosActivos)
//Ruta para obtener productos en oferta : true
router.get('/productos-oferta', productoControlador.ObtenerProductosOferta)
//Ruta para crear un nuevo Producto
router.post('/crearproducto', productoControlador.crearNuevoProducto)
//Ruta para editar un Producto con busqueda por su id 
router.put('/edit-producto/:id', mdJWT.verificarToken, productoControlador.EditarProducto)
//Ruta para eliminar un producto por su id 
router.delete('/eliminar-producto/:id', mdJWT.verificarToken, productoControlador.eliminarProducto)

//Direccion para acceso a la DB
http://localhost:3000/api/

//exportacion del enrutador para uso general
module.exports = router

const UsuarioModel = require("../models/Usuario")

// METODO GET DE MANERA GRUPAL PARA LOS USUARIOS EN DB 
exports.obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await UsuarioModel.find()
        res.json(usuarios)
    } catch (error) {
        console.log(error)
        res.status(500).json({ response: "Ups... Ocurrió algo con el proceso" })
    }
}

//METODO GET DE MANERA INDIVIDUAL. BUSQUEDA POR PARAMETRO ID DE MONGO 

exports.obtenerUnUsuario = async (req, res) => {
    try {
        // regex para validar que sea un id de mongoDB
        let regexIdmongo = /^[0-9a-fA-F]{24}$/
        if (regexIdmongo.test(req.params.id)) {
            const datosUsuario = await UsuarioModel.findById(req.params.id)
            if (!datosUsuario) {
                res.status(404).json('Usuario no encontrado.')
                console.log('Usuario no encontrado');
            } else {
                res.json(datosUsuario)
            }
        } else {
            res.status(400).json('El id proporcionado no existe o no es correcto.')
            console.log('El id proporcionado no existe o no es correcto.');
        }
    } catch (error) {
        console.log(error)
        res.status(502).json('Ups... Ocurrió algo en el proceso, comuníquese con el Administrador.')
    }
}


// METODO POST CREAR USUARIO NUEVO EN DB
exports.crearUsuario = async (req, res) => {
    try {
        const usuarioExistente = await UsuarioModel.findOne({ "correo": req.body.correo }).exec()
        if (usuarioExistente != null) {
            res.status(503).json({ response: "El usuario ya existe" })
            console.log('"El usuario ya existe"');
            return
        }
        let usuario
        usuario = new UsuarioModel(req.body)
        await usuario.save()
        res.json({ response: "Usuario creado con exito." })
        console.log(usuario)
    } catch (error) {
        console.log(error)
        res.status(502).json({ response: "Ups... Ocurrió algo con el proceso" })
    }
}

// METODO PUT CON BUSQUEDA DEL USUARIO CON SU RESPECTIVO ID 
exports.actualizarUsuario = async (req, res) => {
    try {
        let regexIdmongo = /^[0-9a-fA-F]{24}$/
        if (regexIdmongo.test(req.params.id)) {
            const dataUsuario = await UsuarioModel.findById(req.params.id)
            if (!dataUsuario) {
                res.status(404).json('Usuario no encontrado.')
                console.log('Usuario no encontrado.');
            } else {
                const { nombres, apellidos, correo, password, contacto, rol } = req.body
                dataUsuario.nombres = nombres
                dataUsuario.apellidos = apellidos
                dataUsuario.correo = correo
                dataUsuario.password = password
                dataUsuario.contacto = contacto
                dataUsuario.rol = rol
                let usuarActualizado = await UsuarioModel.findOneAndUpdate({ _id: req.params.id }, dataUsuario, { new: true })
                res.json(usuarActualizado)
            }
        } else {
            res.status(400).json('El id proporcionado no existe o no es correcto.')
            console.log('El id proporcionado no existe o no es correcto.');
        }
    } catch (error) {
        console.log(error);
        res.status(502).json('Ups... Algo ocurrió en el proceso, comuniquese con el administrador.')
    }
}


//METODO DELETE PARA ELIMINAR UN USUARIO DEL DATABASE 

exports.eliminarUsuario = async (req, res) => {
    try {
        let regexIdmongo = /^[0-9a-fA-F]{24}$/
        if (regexIdmongo.test(req.params.id)) {
            const datosUsuario = await UsuarioModel
            if (!datosUsuario) {
                res.status(404).json('El id proporcionado no existe o no es correcto.')
                console.log('El id proporcionado no existe o no es correcto.');
            } else {
                await datosUsuario.findOneAndRemove({ _id: req.params.id })
                res.json('Personaje eliminado correctamente.')
                console.log('Personaje eliminado correctamente.');
            }
        } else {
            res.status(400).json('El id proporcionado no existe o no es correcto')
            console.log('El id proporcionado no existe o no es correcto');
        }
    } catch (error) {
        console.log(error);
        res.status(502).json('Ups... Algo ocurrio en el proceso, comuniquese con el Administrador.')
    }
}

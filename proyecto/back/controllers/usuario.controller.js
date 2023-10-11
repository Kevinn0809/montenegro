const UsuarioModel = require("../models/Usuario")

exports.crearUsuario = async (req, res) => {
    try {
        const usuarioExistente = await UsuarioModel.findOne({ "correo": req.body.correo }).exec()
        console.log(usuarioExistente)
        if (usuarioExistente != null) {
            res.status(503).json({ response: "El usuario ya existe" })
            return
        }

        let usuario
        usuario = new UsuarioModel(req.body)
        await usuario.save()
        res.json(usuario)
    } catch (error) {
        console.log(error)
        res.status(502).json({ response: "Ups... Ocurrió algo con el proceso" })
    }
}

exports.obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await UsuarioModel.find()
        res.json(usuarios)
    } catch (error) {
        console.log(error)
        res.status(500).json({ response: "Ups... Ocurrió algo con el proceso" })
    }
}

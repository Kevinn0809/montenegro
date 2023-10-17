require('dotenv').config({ path: 'config.env' })
const jwt = require('jsonwebtoken')
const Usuariomodel = require('../models/Usuario')

exports.generarToken = async (req, res) => {
    const { correo, password } = req.body

    const usuario = await Usuariomodel.findOne({ correo: correo })
    if (!Usuariomodel) {
        return res.status(401).json({ msg: 'El correo o contraseña es invalido. C' })
    }
    if (Usuariomodel.password !== password) {
        return res.status(401).json({ msg: 'El correo o contraseña es invalido. P' })
    }

    const payload = {
        usuarioId: Usuariomodel._id,
        correoE: Usuariomodel.correo,
        rol: Usuariomodel.rol
    }

    const token = jwt.sign(payload, process.env.JWT_WEB_TOKEN, { expiresIn : '2hr'})

        //respuesta recomendada 202, en vez de 200 
        return res.status(202).json(token)
}

require('dotenv').config({ path: 'config.env' })
const jwt = require('jsonwebtoken')
const Usuariomodel = require('../models/Usuario')

exports.generarToken = async (req, res) => {
    const { correo, password } = req.body

    const usuario = await Usuariomodel.findOne({ correo: correo })
    if (!usuario) {
        return res.status(401).json({ msg: 'El correo o contraseña es invalido. C' })
    }
    if (usuario.password !== password) {
        return res.status(401).json({ msg: 'El correo o contraseña es invalido. P' })
    }

    const payload = {
        usuarioId: usuario._id,
        correoE: usuario.correo,
        rol: usuario.rol
    }

    console.log(payload)

    const token = jwt.sign(payload, process.env.JWT_WEB_TOKEN, { expiresIn: '2hr' })

    //respuesta recomendada 202, en vez de 200 
    return res.status(202).json({ token: token })
}

exports.desencriptarToken = (req, res) => {
    const token = req.body.tokenUser; //Obtención token del body para desecnriptar
    jwt.verify(token, process.env.JWT_WEB_TOKEN, (err, decoded) => {
        if (err) {
            return res.status(401).json({ mensaje: 'Token invalido' })
        }
        //el payload se decodificará en la variable payload
        res.status(200).json({ decodedPayload: decoded })
    })
}

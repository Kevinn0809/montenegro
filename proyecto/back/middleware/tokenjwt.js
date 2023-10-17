require('dotenv').config({ path: 'config.env' })
const jwt = require('jsonwebtoken')

exports.verificarToken = (req, res, next) => {
    // estructura jwt --> Bearer + token 

    let token = req.headers.authorization


    if (!token) {
        return res.status(400).json({ msg: 'Token no recibido' })
    }

    token = token.split(' ')

    jwt.verify(token[1], process.env.JWT_WEB_TOKEN, (error, decoded) => {

        if (error) {
            return res.status(403).json({ msg: 'Token invalido' })
        }

        req.userData = decoded

        next()
    })
}

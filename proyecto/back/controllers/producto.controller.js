const ProductModel = require('../models/Productos')

//METODO GET PARA OBTENER PRODUCTOS DE MANERA GRUPAL 
exports.ObtenerAllProductos = async (req, res) => {
    try {
        const Productos = await ProductModel.find()
        res.json(Productos)
    } catch (error) {
        console.log(error);
        res.status(500).json({ response: 'Ups... Ocurrio algo en el proceso, comunicate con el Admin.' })
    }
}

// METODO GET PARA OBTENER PORDUCTOS DE MANERA INDIVIUDAL POR SU ID DE MONGO DB 
exports.ObtenerunSoloProducto = async (req, res) => {
    try {
        let regexIdmongo = /^[0-9a-fA-F]{24}$/
        if (regexIdmongo.test(req.params.id)) {
            const datosProducto = await ProductModel.findById(req.params.id)
            if (!datosProducto) {
                res.status(404).json('Usuario no encontrado.')
                console.log('Usuario no encontrado.');
            } else {
                res.json(datosProducto)
            }
        } else {
            res.status(404).json('El id proporcionado no existe o es incorrecto')
            console.log('El id proporcionado no existe o es incorrecto');
        }
    } catch (error) {
        console.log(error);
        res.status(502).json({ response: 'Ups... Ocurrió algo en el proceso, comunicate con el administrador.' })
    }
}

//FUNCION GET PARA OBTENER PRODUCTOS DISPONIBLES, O CON VALOR DE LLAVE ACTIVO : TRUE
exports.ObtenerProductosActivos = async (req, res) => {
    try {
        const ProductosActivos = await ProductModel.find({ activo: true })
        res.json(ProductosActivos)
    } catch (error) {
        console.log(error);
        res.status(500).json({ response: 'Ups... Ocurrió algo en el proceso, comunicate con el administrador.' })
    }
}

//FUNCION GET PARA OBTENER PRODUCTOS CON OFERTA, O CON VALOR DE LA LLAVE OFERTA : TRUE
exports.ObtenerProductosOferta = async (req, res) => {
    try {
        const ProductosEnOferta = await ProductModel.find({ oferta: true })
        res.json(ProductosEnOferta)
    } catch (error) {
        console.log(error);
        res.status(500).json('Ups... Ocurrió algo en el proceso, comunicate con el administrador.')
    }
}

// FUNCION POST - CREAR UN NUEVO PRODUCTO 
exports.crearNuevoProducto = async (req, res) => {
    try {
        let Producto
        Producto = new ProductModel(req.body)
        await Producto.save()
        res.json('Producto creado de manera exitosa')
        console.log('Producto creado con exito.')
        console.log(Producto);
    } catch (error) {
        console.log(error);
        res.status(502).json('Ups... Ocurrió algo en el proceso, comunicate con el administrador.')
    }
}

//FUNCION PUT PARA MODIFICAR O EDITAR LA INFO DEL PRODUCTO POR MEDIO DE SU ID  
exports.EditarProducto = async (req, res) => {
    try {
        let regexIdmongo = /^[0-9a-fA-F]{24}$/
        if (regexIdmongo.test(req.params.id)) {
            const datosProducto = await ProductModel.findById(req.params.id)
            if (!datosProducto) {
                res.status(404).json('Producto no encontrado.')
                console.log('Producto no encontrado.');
            } else {
                const { nombreP, descripcion, categoria, valor, activo, oferta } = req.body
                datosProducto.nombreP = nombreP
                datosProducto.descripcion = descripcion
                datosProducto.categoria = categoria
                datosProducto.valor = valor
                datosProducto.activo = activo
                datosProducto.oferta = oferta
                let Productoactualizado = await ProductModel.findOneAndUpdate({ _id: req.params.id }, Productoactualizado, { new: true })
                res.json(Productoactualizado)
                console.log(Productoactualizado);
            }
        } else {
            res.status(400).json('El id proporcionado no existe o no es correcto.')
            console.log('El id proporcionado no existe o no es correcto.');
        }
    } catch (error) {
        console.log(error);
        res.status(502).json('Ups... Ocurrió algo en el proceso, comunicate con el administrador.')
    }
}

//METODO DELETE PARA ELIMINAR UN PRODUCTO DEL DB
exports.eliminarProducto = async (req, res) => {
    try {
        let regexIdmongo = /^[0-9a-fA-F]{24}$/
        if (regexIdmongo.test(req.parms.id)) {
            const datosProducto = await ProductModel
            if (!datosProducto) {
                res.status(400).json('El id proporcionado no existe o no es correcto.')
                console.log('El id proporcionado no existe o no es correcto.');
            } else {
                await datosProducto.findOneAndRemove({ _id: req.params.id })
                res.json('Eliminacion exitosa del producto.')
                console.log('Eliminacion exitosa del producto.');
            }
        } else {
            res.status(400).json('El id proporcionado no existe o no es correcto.')
            console.log('El id proporcionado no existe o no es correcto.');
        }
    } catch (error) {
        console.log(error);
        res.status(502).json('Ups... Ocurrió algo en el proceso, comunicate con el administrador.')
    }
}

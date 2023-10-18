export class Producto {
    _id?: string
    nombreP: string
    descripcion: string
    categoria: string
    valor: number
    activo: boolean
    oferta: boolean

    constructor(nombreP: string, descripcion: string, categoria: string, valor: number, activo: boolean, oferta: boolean) {
        this.nombreP = nombreP
        this.descripcion = descripcion
        this.categoria = categoria
        this.valor = valor
        this.activo = activo
        this.oferta = oferta
    }
}

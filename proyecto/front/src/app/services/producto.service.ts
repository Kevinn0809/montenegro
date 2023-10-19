import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from "../models/Productos";

@Injectable({
    providedIn: 'root'
})
export class ProductoServices {
    url = 'http://localhost:3000/api'

    constructor(private http: HttpClient) { }

    getTodoslosproductos(): Observable<any> {
        return this.http.get(`${this.url}/obtener-all-productos`)
    }

    getProductosdisponibles(): Observable<any> {
        return this.http.get(`${this.url}/productos-disponibles`)
    }

    getProductosEnOferta(): Observable<any> {
        return this.http.get(`${this.url}/productos-oferta`)
    }

    getUnsoloproducto(idProducto: string): Observable<any> {
        return this.http.get(`${this.url}/obtenerProducto/${idProducto}`)
    }

    postProducto(productoD: Producto): Observable<any> {
        return this.http.post(`${this.url}/crearproducto`, productoD)
    }

    putEditarproducto(idProducto: string | null, dataProducto: Producto): Observable<any> {
        return this.http.put(`${this.url}/edit-producto${idProducto}`, dataProducto)
    }

    //Endpoint para creacion de token de seguridad
    postIngresocuenta(datalogin: object): Observable<any> {
        return this.http.post(`${this.url}/login`, datalogin)
    }

    estaLogueado() {
        //rectifica si el equipo actual esta logueado "tiene token de seguridad"
        return (sessionStorage.getItem('token') != null) ? true : false
    }

    postDesencriptarToken(token: string) {
        return this.http.post(`${this.url}/info-login`, { tokenUser: token })
    }
}

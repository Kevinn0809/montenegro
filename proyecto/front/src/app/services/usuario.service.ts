import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from "../models/Usuario";

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    constructor(private http: HttpClient) { }

    url = 'http://localhost:3000/api'

    getTodoslosUsuarios(): Observable<any> {
        return this.http.get(`${this.url}/obtener-usuarios`)
    }

    getUnsoloUsuario(idUsuario: string): Observable<any> {
        return this.http.get(`${this.url}/obtenerusuario/${idUsuario}`)
    }

    postUsuario(usuarioD: Usuario): Observable<any> {
        return this.http.post(`${this.url}/crearproducto`, usuarioD)
    }

    putEditarUsuario(idUsuario: string | null, dataUsuario: Usuario): Observable<any> {
        return this.http.put(`${this.url}/edit-producto${idUsuario}`, dataUsuario)
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

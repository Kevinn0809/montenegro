import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from "../models/Usuario";

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    constructor(private http: HttpClient) { }

    url = 'http://localhost:3000/api'

    getTodoslosUsuarios(): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('token')}`)
        return this.http.get(`${this.url}/obtener-usuarios`, { headers })
    }

    getUnsoloUsuario(idUsuario: string): Observable<any> {
        return this.http.get(`${this.url}/obtenerusuario/${idUsuario}`)
    }

    postUsuario(usuarioD: Usuario): Observable<any> {
        return this.http.post(`${this.url}/usuario`, usuarioD)
    }

    putEditarUsuario(idUsuario: string | null, dataUsuario: Usuario): Observable<any> {
        return this.http.put(`${this.url}/edit-usuario${idUsuario}`, dataUsuario)
    }


    deleteUsuario(idUsuario: string): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('token')}`)
        return this.http.delete(`${this.url}/eliminar-usuario/${idUsuario}`, { headers })
    }

    //Endpoint para creacion de token de seguridad
    postIngresocuenta(datalogin: object): Observable<any> {
        return this.http.post(`${this.url}/login`, datalogin)
    }


    postDesencriptarToken(token: string) {
        return this.http.post(`${this.url}/info-login`, { tokenUser: token })
    }

    estalogueado() {
        //rectifica si el equipo actual esta logueado "tiene token de seguridad"
        return (sessionStorage.getItem('token') != null) ? true : false
    }

    esAdmin() {
        return (sessionStorage.getItem('Rol') === 'admin') ? true : false
    }

    esCliente() {
        return (sessionStorage.getItem('Rol') === 'cliente') ? true : false
    }
}

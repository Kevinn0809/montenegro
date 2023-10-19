import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UsuarioService } from "src/app/services/usuario.service";
import { ActivatedRoute, Router } from "@angular/router";
import Swal from 'sweetalert2'
import { Token } from '@angular/compiler';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    Userformlogin = {
        correo: '',
        password: ''
    }


    formRegistro: FormGroup
    regexAlfabetico = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/
    regexCorreo = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/

    constructor(private fb: FormBuilder, private _usuarioService: UsuarioService, private router: Router, private idUsuarioUrl: ActivatedRoute) {
        this.formRegistro = this.fb.group({
            nombres: ['', Validators.required, Validators.pattern(this.regexAlfabetico)],
            apellidos: ['', Validators.required, Validators.pattern(this.regexAlfabetico)],
            correo: ['', Validators.required, Validators.pattern(this.regexCorreo)]
        })
    }

    IngresoUsuario() {
        this._usuarioService.postIngresocuenta(this.Userformlogin).subscribe(respuestaApi => {
            let TokenApi = respuestaApi.token
            sessionStorage.setItem('token', respuestaApi.token)
            this._usuarioService.postDesencriptarToken(TokenApi).subscribe((respuestApi2: any) => {

                sessionStorage.setItem('infoUsuario', JSON.stringify(respuestApi2.decodedPayload))
                let jsonString: any = sessionStorage.getItem('infoUsuario')
                let objetosJson = JSON.parse(jsonString)
                let rolUsuario = objetosJson.rol
                if (rolUsuario === "admin") {
                    const Createtok = sessionStorage.setItem('Rol', 'admin')
                    this.router.navigate([''])
                } else {
                    const Createtokrol = sessionStorage.setItem('Rol', 'usuario')
                    this.router.navigate([''])
                }
            })
        }, err => {
            Swal.fire({
                icon: 'error',
                title: 'Usuario y/o contraseña incorrectos.',
            })
        })
    }

}

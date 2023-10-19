import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UsuarioService } from "src/app/services/usuario.service";
import { ActivatedRoute, Router } from "@angular/router";
import Swal from 'sweetalert2'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
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
}

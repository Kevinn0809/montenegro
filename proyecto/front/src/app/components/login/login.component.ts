import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
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
export class LoginComponent implements OnInit {
    Userformlogin = {
        correo: '',
        password: ''
    }

    formRegister: FormGroup
    //regex formulario
    regexAlfabetico = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/
    regexCorreo = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
    regexSoloNumeros = /^[0-9]+$/
    regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

    idUsuarioUrl: string | null

    //elementos del html
    @ViewChild('passConfirm') passConfirm!: ElementRef
    @ViewChild('alertPass') alertPass!: ElementRef
    @ViewChild('submitRegister') submitRegister!: ElementRef
    @ViewChild('cerrarBtnRegistro') cerrarBtnRegistro!: ElementRef

    constructor(private fb: FormBuilder, private _usuarioService: UsuarioService, private router: Router, private idUsuarioRuta: ActivatedRoute) {
        this.formRegister = this.fb.group({
            nombres: ['', [Validators.required, Validators.pattern(this.regexAlfabetico)]],
            apellidos: ['', [Validators.required, Validators.pattern(this.regexAlfabetico)]],
            correo: ['', [Validators.required, Validators.pattern(this.regexCorreo)]],
            contacto: ['', [Validators.required, Validators.pattern(this.regexSoloNumeros), Validators.minLength(10)]],
            password: ['', [Validators.required, Validators.pattern(this.regexPassword)]]
        })
        this.idUsuarioUrl = this.idUsuarioRuta.snapshot.paramMap.get('id')
    }
    ngOnInit(): void {

    }

    resetform() {
        this.formRegister.reset()
    }

    registerUser() {
        if (this.idUsuarioUrl == null) {
            if (this.confirmPass()) {
                this._usuarioService.postUsuario(this.formRegister.value).subscribe(data => {
                    let timerInterval: any
                    let b: any
                    Swal.fire({
                        icon: 'success',
                        title: 'Usuario creado',
                        timer: 2000,
                        timerProgressBar: true,
                        didOpen: () => {
                            b = Swal.getHtmlContainer()!.querySelector('b');
                            timerInterval = setInterval(() => {
                                const timerLeft = Swal.getTimerLeft();
                                if (b) {
                                    b.textContent = timerLeft!.toString();
                                }
                            }, 100);
                        },
                        willClose: () => {
                            clearInterval(timerInterval);
                        }
                    }).then((result) => {
                        if (result.dismiss === Swal.DismissReason.timer) {
                            console.log('Se acabo el tiempo, por ende cierro el modal');
                        } else if (result.isConfirmed) {
                            console.log('El usuario confirmó el modal');
                        }
                    });
                    console.log(data)
                    this.resetform()
                    this.cerrarBtnRegistro.nativeElement.click()

                })
            } else {
                console.log('ayuda')
            }
        } else {
            if (this.confirmPass()) {
                this._usuarioService.putEditarUsuario(this.idUsuarioUrl, this.formRegister.value).subscribe(data => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Usuario Actualizado',
                        iconColor: '#2ce30b'
                    })
                    this.router.navigate(['/admin/usuarios-registrados'])
                })
            } else {
                console.log('%c Contraseña invalida!!', 'color: red; font-size:2rem;')
            }
        }
    }

    confirmPass() {
        let passUser = this.formRegister.get('password')?.value
        if (passUser != this.passConfirm.nativeElement.value) {
            this.alertPass.nativeElement.classList.remove('d-none')
            this.submitRegister.nativeElement.disabled = "true"
            return true
        } else {
            this.alertPass.nativeElement.classList.add('d-none')
            this.submitRegister.nativeElement.disabled = "false"
            return false
        }
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
                    sessionStorage.setItem('Rol', 'admin')
                    location.reload()
                    this.router.navigate([''])
                } else {
                    sessionStorage.setItem('Rol', 'cliente')
                    location.reload()
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

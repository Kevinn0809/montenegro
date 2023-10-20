import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UsuarioService } from "src/app/services/usuario.service";
import Swal from 'sweetalert2'

@Component({
    selector: 'app-barra-nav',
    templateUrl: './barra-nav.component.html',
    styleUrls: ['./barra-nav.component.css']
})
export class BarraNavComponent implements OnInit {

    @ViewChild('botoncerrarcanva') botoncerrarcanva!: ElementRef

    ngOnInit(): void {
    }

    constructor(public _usuarioservice: UsuarioService, private router: Router) { }


    // redirected() {
    //     if (sessionStorage.getItem('Redirected')) {
    //         sessionStorage.removeItem('Redirected')
    //         window.location.reload()
    //     }
    // }

    cerrarSesion() {
        sessionStorage.removeItem('Redirected')
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('Rol')
        sessionStorage.removeItem('infoUsuario')
        Swal.fire({
            title: 'Sesión Cerrada.',
            html: '¡Esperamos verte de nuevo!',
            timer: 1500
        })
        this.router.navigate(['/ingreso'])
        this.botoncerrarcanva.nativeElement.click()
    }


}

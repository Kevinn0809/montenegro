import { Component, OnInit } from '@angular/core';
import { Usuario } from "src/app/models/Usuario";
import { UsuarioService } from "src/app/services/usuario.service";
import Swal from 'sweetalert2'


@Component({
    selector: 'app-usuarios-lista',
    templateUrl: './usuarios-lista.component.html',
    styleUrls: ['./usuarios-lista.component.css']
})
export class UsuariosListaComponent implements OnInit {

    ngOnInit(): void {
        this.Getproductos()
    }

    ListaUsuarios: any[] = []



    constructor(private _usuarioservice: UsuarioService) { }

    Getproductos() {
        this._usuarioservice.getTodoslosUsuarios().subscribe((data) => {
            this.ListaUsuarios = data
        }, Error => {
            console.log(Error);
            Swal.fire({
                icon: 'error',
                title: 'Algó paso, recargue la pagina',
                iconColor: '#d33'
            })
        })
    }

    EliminarUsuario(id_product: any) {
        Swal.fire({
            title: 'Esta seguro que desea eliminar el Producto?',
            text: "Tenga en cuenta que esta acción no sera reversible, se perderá el producto ☹️",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#11a811',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            iconColor: '#db9a18'
        }).then((result) => {
            this._usuarioservice.deleteUsuario(id_product).subscribe(resAPi => {
                if (result.isConfirmed) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Producto eliminado.',
                        iconColor: '#2ce30b'
                    })
                    this.Getproductos()
                }
            }, error => {
                console.log(error);
            })
        })
    }



}

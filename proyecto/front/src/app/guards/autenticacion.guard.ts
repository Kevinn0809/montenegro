import { CanMatchFn } from '@angular/router';
import { Inject } from "@angular/core";
import { UsuarioService } from "src/app/services/usuario.service";


export const autenticacionGuard: CanMatchFn = (route, segments) => {
    const _usuarioservice = Inject(UsuarioService)
    return _usuarioservice.estaLogueado()
};

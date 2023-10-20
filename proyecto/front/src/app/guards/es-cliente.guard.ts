import { CanMatchFn } from '@angular/router';
import { inject } from "@angular/core";
import { UsuarioService } from "src/app/services/usuario.service";

export const esClienteGuard: CanMatchFn = (route, segments) => {
    const _usuarioservice = inject(UsuarioService)
    return _usuarioservice.esCliente()
};

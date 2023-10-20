import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicioComponent } from './components/pagina-inicio/pagina-inicio.component';
import { LoginComponent } from './components/login/login.component';
import { Error404Component } from './components/error404/error404.component';
import { CoreproductosComponent } from './components/coreproductos/coreproductos.component';
import { DetalleproductosComponent } from './components/detalleproductos/detalleproductos.component';
import { autenticacionGuard } from "src/app/guards/autenticacion.guard";
import { esAdminGuard } from "src/app/guards/es-admin.guard";
import { esClienteGuard } from "src/app/guards/es-cliente.guard";
import { UsuariosListaComponent } from './components/admin/usuarios-lista/usuarios-lista.component';
import { ProductosCrudComponent } from './components/admin/productos-crud/productos-crud.component';

const routes: Routes = [
    { path: '', component: PaginaInicioComponent },
    { path: 'ingreso', component: LoginComponent },
    { path: 'productos', component: CoreproductosComponent },
    { path: 'detalleproducto/:id', component: DetalleproductosComponent },
    { path: 'admin/lista-usuarios', canMatch: [autenticacionGuard, esAdminGuard], component: UsuariosListaComponent },
    { path: 'admin/productos-lista', canMatch: [esAdminGuard], component: ProductosCrudComponent },
    { path: '404', component: Error404Component },
    { path: '**', redirectTo: '404', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicioComponent } from './components/pagina-inicio/pagina-inicio.component';
import { CoreproductosComponent } from './components/coreproductos/coreproductos.component';
import { DetalleproductosComponent } from './components/detalleproductos/detalleproductos.component';

const routes: Routes = [
    { path: '', component: PaginaInicioComponent },
    { path: 'productos', component: CoreproductosComponent },
    { path: 'detalleproducto/:id', component: DetalleproductosComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicioComponent } from './components/pagina-inicio/pagina-inicio.component';
import { LoginComponent } from './components/login/login.component';
import { Error404Component } from './components/error404/error404.component';

const routes: Routes = [
    { path: '', component: PaginaInicioComponent },
    { path: 'ingreso', component: LoginComponent },
    { path: '404', component: Error404Component },
    { path: '**', redirectTo: '404', pathMatch: 'full' }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

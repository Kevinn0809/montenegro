import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavComponent } from './components/barra-nav/barra-nav.component';
import { FooterComponent } from "./components/footer/footer.component";
import { PaginaInicioComponent } from './components/pagina-inicio/pagina-inicio.component';
import { LoginComponent } from './components/login/login.component';
import { Error404Component } from './components/error404/error404.component';

@NgModule({
    declarations: [
        AppComponent,
        BarraNavComponent,
        FooterComponent,
        PaginaInicioComponent,
        LoginComponent,
        Error404Component
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavComponent } from './components/barra-nav/barra-nav.component';
import { FooterComponent } from "./components/footer/footer.component";
import { PaginaInicioComponent } from './components/pagina-inicio/pagina-inicio.component';
import { LoginComponent } from './components/login/login.component';
import { CoreproductosComponent } from './components/coreproductos/coreproductos.component';
import { DetalleproductosComponent } from './components/detalleproductos/detalleproductos.component';

@NgModule({
    declarations: [
        AppComponent,
        BarraNavComponent,
        FooterComponent,
        PaginaInicioComponent,
        LoginComponent,
        CoreproductosComponent,
        DetalleproductosComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

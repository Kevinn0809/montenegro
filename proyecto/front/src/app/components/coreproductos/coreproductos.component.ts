import { Component, OnInit } from '@angular/core';
import { ProductoServices } from 'src/app/services/producto.service';
import { Producto } from '../../models/Productos';

@Component({
  selector: 'app-coreproductos',
  templateUrl: './coreproductos.component.html',
  styleUrls: ['./coreproductos.component.css']
})
export class CoreproductosComponent implements OnInit {
    listaProductos : Producto[] = []
    Productdata : any = ""

    constructor(private _productoService: ProductoServices) {}

    ngOnInit(): void {
        this.obtenerProductos()
    }

    obtenerProductos() {
        this._productoService.getProductosdisponibles().subscribe(respuestaApi => {
            this.listaProductos = respuestaApi
            console.log(this.listaProductos)
        }, error => {
            console.log(error)
        })
    }

    obtenerUnProducto(_idproducto : any) {
        this._productoService.getUnsoloproducto( _idproducto).subscribe(respuestaApi => {
            this.Productdata = respuestaApi
            console.log(this.Productdata)
        }, error => {
            console.log(error)
        })
    }

}

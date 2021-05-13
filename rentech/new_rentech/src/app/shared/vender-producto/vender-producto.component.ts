import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-vender-producto',
  templateUrl: './vender-producto.component.html',
  styleUrls: ['./vender-producto.component.css']
})
export class VenderProductoComponent implements OnInit {
  nombre: String;
  productos;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ClienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.ClienteService.listarProductos("productos").subscribe(
      datos => {
        try {
          console.log(datos)
          this.productos=datos;
          console.log(this.productos)
        }
        catch (error) {
          console.log("error")
        }
      });

  }

}

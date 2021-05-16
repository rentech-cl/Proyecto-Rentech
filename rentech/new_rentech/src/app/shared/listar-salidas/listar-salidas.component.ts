import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from '../service/cliente.service';
@Component({
  selector: 'app-listar-salidas',
  templateUrl: './listar-salidas.component.html',
  styleUrls: ['./listar-salidas.component.css']
})
export class ListarSalidasComponent implements OnInit {
  listarpedidos: ListarSalidasComponent;
  alquiler;
  compra;

  idEmpleado: string = null;
  asignarUsuario;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ClienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.ClienteService.ListarSalidasAlquiler(this.idEmpleado).subscribe(
      datos => {
        try {
          console.log(datos)
          this.alquiler=datos;
          // console.log(this.alquiler)
        }
        catch (error) {
          console.log("error")
        }
      });
      this.ClienteService.ListarSalidasCompra(this.idEmpleado).subscribe(
        datos => {
          try {
            console.log(datos)
            this.compra=datos;
            // console.log(this.alquiler)
          }
          catch (error) {
            console.log("error")
          }
        });
  }

}

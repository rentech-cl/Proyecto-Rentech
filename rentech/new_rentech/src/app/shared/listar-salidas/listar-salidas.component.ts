import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AsignarAveria } from 'src/app/models/asignarAveria';
import { compra } from 'src/app/models/listCompra';
import { ClienteService } from '../service/cliente.service';
@Component({
  selector: 'app-listar-salidas',
  templateUrl: './listar-salidas.component.html',
  styleUrls: ['./listar-salidas.component.css']
})
export class ListarSalidasComponent implements OnInit {
  listarpedidos: ListarSalidasComponent;
  alquiler;
  compra =new compra;

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
            this.alquiler=datos;
            // console.log(this.alquiler)
          }
          catch (error) {
            console.log("error")
          }
        });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AsignarAveria } from 'src/app/models/asignarAveria';
import { compra } from 'src/app/models/listCompra';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-historial-pedido',
  templateUrl: './historial-pedido.component.html',
  styleUrls: ['./historial-pedido.component.css']
})
export class HistorialPedidoComponent implements OnInit {

  listarpedidos: HistorialPedidoComponent;
  alquiler;
  compra =new compra;

  idEmpleado: string = null;
  asignarUsuario;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ClienteService: ClienteService) { }

  ngOnInit(): void {
    this.idEmpleado= localStorage.getItem('id');


    this.ClienteService.listarAlquiler(this.idEmpleado).subscribe(
      datos => {
        try {
          //console.log(datos)
          this.alquiler=datos;
          // //console.log(this.alquiler)
        }
        catch (error) {
          //console.log("error")
        }
      });


      this.ClienteService.listarCompras(this.idEmpleado).subscribe(
        datos => {
          try {
            //console.log(datos)
            this.compra=datos;
            // //console.log(this.compra)
          }
          catch (error) {
            //console.log("error")
          }
        });


  }

}

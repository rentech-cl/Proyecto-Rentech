import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AsignarAveria } from 'src/app/models/asignarAveria';
import { Averia } from 'src/app/models/averia';
import { ClienteService } from '../service/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-averias',
  templateUrl: './averias.component.html',
  styleUrls: ['./averias.component.css']
})
export class AveriasComponent implements OnInit {
  listaraveria: AveriasComponent;
  averia= new Averia;
  nombre: String;
  idEmpleado: string = null;
  asignarUsuario;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ClienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.ClienteService.listarAverias("averias").subscribe(
      datos => {
        try {
          console.log(datos)
          this.averia=datos;
          console.log(this.averia)
        }
        catch (error) {
          console.log("error")
        }
      });

      this.idEmpleado= localStorage.getItem('id');
  }

  seleccionar(idAveria){
    this.asignarUsuario = new AsignarAveria(this.idEmpleado, idAveria)
    console.log(this.asignarUsuario)

    this.ClienteService.asignarAveria(this.asignarUsuario).subscribe(
      datos => {

        if (datos['result'] === 'OK') {
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Averia asignada!',
            showConfirmButton: false,
            timer: 1500
          })
          
        }else{
          Swal.fire({
            position:'top',
            icon: 'error',
            title:'Averia no asignada!',
            showConfirmButton: false,
            timer: 1500
          })
        }

        try {
          console.log(datos)
          console.log(this.averia)
        }
        catch (error) {
          console.log("error")
        }
      });
  }

}

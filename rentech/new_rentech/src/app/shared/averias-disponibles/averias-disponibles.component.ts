import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AsignarAveria } from 'src/app/models/asignarAveria';
import { Averia } from 'src/app/models/averia';
import Swal from 'sweetalert2';
import { ClienteService } from '../service/cliente.service';


@Component({
  selector: 'app-averias-disponibles',
  templateUrl: './averias-disponibles.component.html',
  styleUrls: ['./averias-disponibles.component.css']
})
export class AveriasDisponiblesComponent implements OnInit {

  listaraveria: AveriasDisponiblesComponent;
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

    this.idEmpleado= localStorage.getItem('id');


    this.ClienteService.listarAveriasTecnico(this.idEmpleado).subscribe(
      datos => {
        try {
          this.averia=datos;
          // //console.log(this.alquiler)
        }
        catch (error) {
          //console.log("error")
        }
      });



  }

  seleccionar(idAveria){


    this.ClienteService.averiaresuelta(idAveria).subscribe(
      datos => {
        try {
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Averia solucionada!',
            showConfirmButton: false,
            timer: 1500
          })
          window.location.reload();

          //console.log(this.averia)
        }
        catch (error) {
          //console.log("error")
        }
      });
  }

}

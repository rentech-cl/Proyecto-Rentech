import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';
import { Evento } from 'src/app/models/evento';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-anadir-averia',
  templateUrl: './anadir-averia.component.html',
  styleUrls: ['./anadir-averia.component.css']
})
export class AnadirAveriaComponent implements OnInit {
  myForm: FormGroup;
  submitted = false;
  averia_nueva = new Evento;
  idCliente;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ClienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.idCliente = localStorage.getItem('id')
    this.myForm = this.formBuilder.group({
      nombre: ['', [Validators.minLength(2), Validators.maxLength(255), Validators.required]],
      fecha: ['', [Validators.minLength(2), Validators.maxLength(255), Validators.required]],
    }
    );
  }

  enviaraveria(){
    this.submitted = true;

    if (this.myForm.invalid) {
      return;
    }else{

      console.log(this.averia_nueva)

      this.ClienteService.anadirEvento(this.averia_nueva).subscribe(
        (datos: Evento) => {
          console.log(datos)
          if (datos['result'] === 'OK') {
            Swal.fire({
              position: 'top',
              icon: 'success',
              title: 'Evento añadido!',
              showConfirmButton: false,
              timer: 1500

            })
             window.location.reload();
          }
          else{
            Swal.fire({
              position:'top',
              icon: 'error',
              title:'Evento no creado!',
              showConfirmButton: false,
              timer: 1500
            })
          }
        try {
          //console.log(datos)
        }
        catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Datos introducidos incorrectos, revisa tus datos',
          })
        }
      });
    }

  }
  get f() {return this.myForm.controls; }
}

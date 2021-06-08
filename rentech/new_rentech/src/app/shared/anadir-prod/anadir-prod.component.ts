import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../service/cliente.service';
import Swal from 'sweetalert2';
import { Evento } from 'src/app/models/evento';

@Component({
  selector: 'app-anadir-prod',
  templateUrl: './anadir-prod.component.html',
  styleUrls: ['./anadir-prod.component.css']
})
export class AnadirProdComponent implements OnInit {


  myForm: FormGroup;
  submitted = false;
  producto_nuevo = new Evento;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ClienteService: ClienteService
  ) {

  }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      nombre: ['', [Validators.minLength(2), Validators.maxLength(15), Validators.required]],
      fecha: ['', [Validators.minLength(2), Validators.maxLength(255), Validators.required]],
    }
    );
  }

  anadir() {

    this.submitted = true;
    if (this.myForm.invalid) {
      return;
    }else{

      this.ClienteService.anadirProducto(this.producto_nuevo).subscribe(

        (datos: Evento) => {
          if (datos['result'] === 'OK') {
            Swal.fire({
              position: 'top',
              icon: 'success',
              title: 'Producto guardado!',
              showConfirmButton: false,
              timer: 1500
            })
          }
          else{
            Swal.fire({
              position:'top',
              icon: 'error',
              title:'Evento no agregado!',
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


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tecnico } from 'src/app/models/tecnico';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ClienteService } from '../service/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-anadir-tecnico',
  templateUrl: './anadir-tecnico.component.html',
  styleUrls: ['./anadir-tecnico.component.css']
})
export class AnadirTecnicoComponent implements OnInit {



  myForm: FormGroup;
  submitted = false;
  tecnico_nuevo = new Tecnico;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ClienteService: ClienteService


  ) {

  }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      nombre: ['', [Validators.minLength(2), Validators.maxLength(15), Validators.required]],
      descripcion: ['', [Validators.minLength(2), Validators.maxLength(255), Validators.required]],
      cantidad: ['', [Validators.minLength(2), Validators.maxLength(15), Validators.required]],
      precio: ['', [Validators.minLength(2), Validators.maxLength(15), Validators.required]],
      img: ['', [Validators.minLength(2), Validators.maxLength(255), Validators.required]],
    }
    );
  }

  anadir() {
    console.log(this.tecnico_nuevo)
    this.ClienteService.anadirProducto(this.tecnico_nuevo).subscribe(
      datos => {
        try {
          console.log(datos)
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

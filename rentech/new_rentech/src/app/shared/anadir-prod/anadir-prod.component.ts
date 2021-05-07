import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../service/cliente.service';
import Swal from 'sweetalert2';
import { Producto } from 'src/app/models/producto';
@Component({
  selector: 'app-anadir-prod',
  templateUrl: './anadir-prod.component.html',
  styleUrls: ['./anadir-prod.component.css']
})
export class AnadirProdComponent implements OnInit {


  myForm: FormGroup;
  submitted = false;
  producto_nuevo = new Producto;
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
    }
    );
  }

  anadir() {
    console.log(this.producto_nuevo)
    this.ClienteService.anadirProducto(this.producto_nuevo).subscribe(
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

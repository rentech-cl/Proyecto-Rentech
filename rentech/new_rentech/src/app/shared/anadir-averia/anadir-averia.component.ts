import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';
import { Averia } from 'src/app/models/averia';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-anadir-averia',
  templateUrl: './anadir-averia.component.html',
  styleUrls: ['./anadir-averia.component.css']
})
export class AnadirAveriaComponent implements OnInit {
  myForm: FormGroup;
  submitted = false;
  averia_nueva = new Averia;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ClienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      nombre: ['', [Validators.minLength(2), Validators.maxLength(15), Validators.required]],
      contacto: ['', [Validators.minLength(2), Validators.maxLength(15), Validators.required]],
      descripcion: ['', [Validators.minLength(2), Validators.maxLength(255), Validators.required]],
      urgencia: ['', [Validators.minLength(2), Validators.maxLength(15), Validators.required]],
    }
    );
  }

  enviaraveria(){
    this.submitted = true;
    console.log(this.averia_nueva)
    if (this.myForm.invalid) {
      return;
    }else{

      this.ClienteService.anadirAveria(this.averia_nueva).subscribe(
        (datos: Averia) => {
          if (datos['result'] === 'OK') {
            Swal.fire({
              position: 'top',
              icon: 'success',
              title: 'Averia añadida!',
              showConfirmButton: false,
              timer: 1500

            })
             window.location.reload();
          }
          else{
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

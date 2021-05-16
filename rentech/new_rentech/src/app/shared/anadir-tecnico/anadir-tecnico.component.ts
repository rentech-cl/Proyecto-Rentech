import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tecnico } from 'src/app/models/tecnico';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../service/cliente.service';
import Swal from 'sweetalert2';
import { CustomValidators } from 'src/app/custom-validators';
import { ConfirmedValidator } from 'src/app/confirmed.validator';

@Component({
  selector: 'app-anadir-tecnico',
  templateUrl: './anadir-tecnico.component.html',
  styleUrls: ['./anadir-tecnico.component.css']
})
export class AnadirTecnicoComponent implements OnInit {



  myForm: FormGroup;
  registerFormT: FormGroup;
  submitted = false;
  tecnico_nuevo = new Tecnico;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ClienteService: ClienteService


  ) {

  }

  ngOnInit(): void {
    this.registerFormT = this.formBuilder.group({
      dni: ['', [Validators.required, Validators.pattern("^[0-9]{8}[A-Za-z]$")]],
      nombre: ['', [Validators.minLength(2), Validators.maxLength(15), Validators.required]],
      apellido: ['', [Validators.minLength(2), Validators.maxLength(15), Validators.required]],
      correo: ['', [Validators.email, Validators.required]],
      telefono: ['', [ Validators.required, Validators.pattern("[0-9]{9}")]],
      direccio: ['', [Validators.minLength(2), Validators.maxLength(60), Validators.required]],
      salario :['', [Validators.minLength(2), Validators.maxLength(15), Validators.required]],
      iban: ['', [Validators.minLength(24), Validators.maxLength(24), Validators.required]],
      contrasena: ['', [Validators.minLength(2), Validators.maxLength(15), Validators.required]],
      confirm_password: [null, Validators.required],
    }, {
      validator: ConfirmedValidator('contrasena', 'confirm_password')
    });
  }



  register() {
    this.submitted = true;
    console.log(this.registerFormT.value);
    if (this.registerFormT.invalid) {
      return;
    }else{
      console.log("Has sido registrado!!");
      this.ClienteService.registerTecnico(this.registerFormT.value).subscribe (
        (datos: Tecnico) => {
          if (datos['result'] === 'OK') {
            Swal.fire({
              position: 'top',
              icon: 'success',
              title: 'Técnico registrado!',
              showConfirmButton: false,
              timer: 1500
            })
          }}
      );
    }
  }


  get f() {return this.registerFormT.controls; }

}




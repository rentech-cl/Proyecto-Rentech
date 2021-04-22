import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ConfirmedValidator } from '../confirmed.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css','../home/home.component.css']
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup;
  usuario = new Cliente;
  registerForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
        private router: Router
  ) {
    this.myForm = this.formBuilder.group({
      nombre: ['', [Validators.minLength(2), Validators.maxLength(15), Validators.required]],
      apellido: ['', [Validators.minLength(2), Validators.maxLength(15), Validators.required]],
      correo: ['', [Validators.email, Validators.required]],
      telefono: ['', [Validators.minLength(2), Validators.maxLength(30), Validators.required, Validators.pattern("[0-9 ]{9}")]],
      iban: ['', [Validators.minLength(24), Validators.maxLength(24), Validators.required]],
      dni: ['', [Validators.required, Validators.pattern("^[0-9]{8}[A-Za-z]$")]],
      cp: ['', [Validators.minLength(2), Validators.maxLength(30), Validators.required, Validators.pattern("[0-9 ]")]],
      direccio: ['', [Validators.minLength(2), Validators.maxLength(60), Validators.required]],
      contrasena: ['', [Validators.minLength(2), Validators.maxLength(15), Validators.required]],
      confirm_password: [null, Validators.required],
    },
    {
      validator: ConfirmedValidator('contrasena', 'confirm_password')
    }
    );
   }

  ngOnInit(): void {
  }

  register() {
    console.log('registro')
  }

  get f(){
    return this.myForm.controls;
  }
}

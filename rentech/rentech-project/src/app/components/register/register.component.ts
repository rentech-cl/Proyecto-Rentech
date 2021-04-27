import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ConfirmedValidator } from '../confirmed.validator';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css','../home/home.component.css']
})
export class RegisterComponent implements OnInit {

  usuario = new Cliente;
  registerForm: FormGroup;
  submitted = false;
 
  constructor(public formBuilder: FormBuilder, private router: Router,private ClienteService: ClienteService) {}
  
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nombre: ['', [Validators.minLength(2), Validators.maxLength(15), Validators.required]],
      apellido: ['', [Validators.minLength(2), Validators.maxLength(15), Validators.required]],
      correo: ['', [Validators.email, Validators.required]],
      telefono: ['', [ Validators.required, Validators.pattern("[0-9 ]{9}")]],
      iban: ['', [Validators.minLength(24), Validators.maxLength(24), Validators.required]],
      dni: ['', [Validators.required, Validators.pattern("^[0-9]{8}[A-Za-z]$")]],
      cp: ['', [Validators.required, Validators.pattern("[0-9 ]{5}")]],
      direccio: ['', [Validators.minLength(2), Validators.maxLength(60), Validators.required]],
      contrasena: ['', [Validators.minLength(2), Validators.maxLength(15), Validators.required]],
      confirm_password: [null, Validators.required],
    }, {
      validator: ConfirmedValidator('contrasena', 'confirm_password')
    });
  }

  get f() {return this.registerForm.controls; }

  register() {
    this.submitted = true;
    console.log(this.registerForm.value);
    if (this.registerForm.invalid) {
      return;
    }else{
      console.log("Has sido registrado!!");
      this.ClienteService.register(this.registerForm.value);
    }
  }
}

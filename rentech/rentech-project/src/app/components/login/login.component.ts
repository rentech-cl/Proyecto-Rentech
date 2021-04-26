import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ConfirmedValidator } from '../confirmed.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../home/home.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  usuario = new Cliente;
  registerForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
        private router: Router
  ) {
    this.myForm = this.formBuilder.group({
      correo: ['', [Validators.email, Validators.required]],
      contrasena: ['', [Validators.minLength(2), Validators.maxLength(15), Validators.required]],
    }
    );
   }

  ngOnInit(): void {
  }

  register() {
    console.log('login')
    console.log(this.usuario)
  }

  get f(){
    return this.myForm.controls;
  }
}

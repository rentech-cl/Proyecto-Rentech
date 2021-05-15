import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente';
import { ConfirmedValidator } from 'src/app/confirmed.validator';
@Component({
  selector: 'app-modificar-perfil',
  templateUrl: './modificar-perfil.component.html',
  styleUrls: ['./modificar-perfil.component.css']
})
export class ModificarPerfilComponent implements OnInit {
  submitted = false;
  registerFormModify: FormGroup;
  perfilCliente : Cliente;
  
  
  nombre: string;
  apellido: string;
  correo: string;
  telefono: string;
  iban: string;
  dni: string;
  cp: string;
  direccio: string;
  contrasena: string;
  confirm_password: string;
  constructor( 
    private Router: Router,
    public formBuilder: FormBuilder,
    private ClienteService: ClienteService ) {
    
   }
  
  ngOnInit(): void {
    this.perfilCliente= this.ClienteService.getDatos();
    this.nombre= localStorage.getItem('nombre');
    this.apellido= localStorage.getItem('apellido');
    this.correo= localStorage.getItem('correo');
    this.telefono= localStorage.getItem('telefono');
    this.iban= localStorage.getItem('iban');
    this.dni= localStorage.getItem('dni');
    this.cp= localStorage.getItem('cp');
    this.dni= localStorage.getItem('dni');
    this.direccio= localStorage.getItem('direccion');
    this.contrasena= localStorage.getItem('contrasena');
    this.confirm_password= localStorage.getItem('confirm_password');
    console.log(this.perfilCliente);
    this.registerFormModify = this.formBuilder.group({
      
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

  logout(){
    localStorage.removeItem('nombre');
    localStorage.removeItem('apellido');
    localStorage.removeItem('nameUser');
    localStorage.removeItem('id');
    localStorage.removeItem('correo');
    localStorage.removeItem('telefono');
    localStorage.removeItem('iban');
    localStorage.removeItem('dni');
    localStorage.removeItem('cp');
    localStorage.removeItem('direccio');
    localStorage.removeItem('password');
    localStorage.removeItem('currentUser');
    this.Router.navigate(['/']);
  }
  toggleMenu() {
    document.getElementById('navbarCollapse').classList.toggle('show');
  }
  

  get f() { return this.registerFormModify.controls; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerFormModify.invalid) {
        return;
    }
  this.ClienteService.modificarCliente(this.registerFormModify).subscribe(
    
    (datos: Cliente) => {
      if (datos["result"] === "ERROR") {
        Swal.fire({
          icon: 'error',
          title: datos["result"],
          text: datos["message"]
        })
      }
      else {
      if (datos!= null) {
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Cliente modificado.',
          showConfirmButton: false,
          timer: 1500
        })
        this.Router.navigate(['/perfil-Cliente']);

      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Intentalo más tarde.',
        })
      }
      //this.ClienteService.setDatos(datos);

    }
    })

  }



}

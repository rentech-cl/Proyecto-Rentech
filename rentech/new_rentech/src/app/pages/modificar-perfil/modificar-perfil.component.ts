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
  mod_nuevo = new Cliente;
  
  nombre: string;
  apellido: string;
  correo: string;
  telefono: string;
  iban: string;
  dni: string;
  cp: string;
  direccio: string;
  password: string;
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
    this.direccio= localStorage.getItem('direccio');
    //this.password= localStorage.getItem('password');
    //this.confirm_password= localStorage.getItem('confirm_password');
    
    console.log(this.perfilCliente);

    this.registerFormModify = this.formBuilder.group({
      
      nombre: [this.nombre, [Validators.minLength(2), Validators.maxLength(15), Validators.required]],
      apellido: [this.apellido, [Validators.minLength(2), Validators.maxLength(15), Validators.required]],
      correo: [this.correo, [Validators.email, Validators.required]],
      telefono: [this.telefono, [ Validators.required, Validators.pattern("[0-9 ]{9}")]],
      iban: [this.iban, [Validators.minLength(24), Validators.maxLength(24), Validators.required]],
      dni: [this.dni, [Validators.required, Validators.pattern("^[0-9]{8}[A-Za-z]$")]],
      cp: [this.cp, [Validators.required, Validators.pattern("[0-9 ]{5}")]],
      direccio: [this.direccio, [Validators.minLength(2), Validators.maxLength(60), Validators.required]],
      //password: [this.password, [Validators.minLength(2), Validators.maxLength(15), Validators.required]],
    // confirm_password: [ , Validators.required],
    }, {
      //validator: ConfirmedValidator('contrasena', 'confirm_password')
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
    console.log(this.registerFormModify.value);
    // stop here if form is invalid
    if (this.registerFormModify.invalid) {
      console.log("eskere");
        return;
    }else{
  this.ClienteService.modificarCliente(this.registerFormModify).subscribe(
    datos => {
      console.log(datos)
    }
  );
   }
  }



  
  

  


  }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ClienteService } from '../../services/cliente.service';
import { Tecnico } from '../../models/tecnico';

@Component({
  selector: 'app-modificar-empleado',
  templateUrl: './modificar-empleado.component.html',
  styleUrls: ['./modificar-empleado.component.css']
})
export class ModificarEmpleadoComponent implements OnInit {
  submitted = false;
  registerFormModify: FormGroup;
  perfilTecnico : Tecnico;


  nombre: string;
  apellido: string;
  correo: string;
  telefono: string;
  iban: string;
  dni: string;
  salario: string;
  direccio: string;

  datosUsuario;
  constructor(
    private Router: Router,
    public formBuilder: FormBuilder,
    private ClienteService: ClienteService ) {



   }

  ngOnInit(): void {
    this.perfilTecnico= this.ClienteService.getDatos();
    this.nombre= localStorage.getItem('nombre');
    this.apellido= localStorage.getItem('apellido');
    this.correo= localStorage.getItem('correo');
    this.telefono= localStorage.getItem('telefono');
    this.iban= localStorage.getItem('iban');
    this.dni= localStorage.getItem('dni');
    this.salario= localStorage.getItem('salario');
    this.dni= localStorage.getItem('dni');
    this.direccio= localStorage.getItem('direccio');

    //console.log(this.perfilTecnico);

    this.registerFormModify = this.formBuilder.group({

      nombre: [this.nombre, [Validators.minLength(2), Validators.maxLength(15), Validators.required]],
      apellido: [this.apellido, [Validators.minLength(2), Validators.maxLength(15), Validators.required]],
      correo: [this.correo, [Validators.email, Validators.required]],
      telefono: [this.telefono, [ Validators.required, Validators.pattern("[0-9 ]{9}")]],
      iban: [this.iban, [Validators.minLength(24), Validators.maxLength(24), Validators.required]],
      dni: [this.dni, [Validators.required, Validators.pattern("^[0-9]{8}[A-Za-z]$")]],
      salario: [this.salario, [Validators.required, ]],
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
    localStorage.removeItem('salario');
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
        return;
    }else{

     
      
    this.ClienteService.modificarEmpledo(this.registerFormModify.getRawValue()).subscribe(
      (data: {}) => {

        if (data['result'] === 'OK') {
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Usuario modificado!',
            showConfirmButton: false,
            timer: 1500


          }

          )
          datos => {
           
            this.datosUsuario = datos;
              }
    
              localStorage.removeItem('nombre');
              localStorage.removeItem('apellido');
              localStorage.removeItem('telefono');
              localStorage.removeItem('iban');
              localStorage.removeItem('direccio');
          
              localStorage.setItem('nombre', this.registerFormModify.value.nombre);
              localStorage.setItem('apellido',this.registerFormModify.value.apellido);
              localStorage.setItem('telefono', this.registerFormModify.value.telefono);
              localStorage.setItem('direccio', this.registerFormModify.value.direccio);
              localStorage.setItem('iban', this.registerFormModify.value.iban);
       
            }else{
          Swal.fire({
            position:'top',
            icon: 'error',
            title:'Usuario no modificado!',
            showConfirmButton: false,
            timer: 1500
          })
        }
            this.Router.navigate(['/dashboard'])
          })


        }



  }









  }

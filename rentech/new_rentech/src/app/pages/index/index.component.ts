import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmedValidator } from 'src/app/confirmed.validator';
import { ClienteService } from '../../services/cliente.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})

/**
 * Index-1 component
 */
export class IndexComponent implements OnInit {

  myForm: FormGroup;
  usuario = new Cliente;
  registerForm: FormGroup;
  submitted = false;
  p: String = null;
  datosUsuario;
  logged: boolean = false;

  currentSection = 'home';

  constructor(
    private modalService: NgbModal,
    public formBuilder: FormBuilder,
    private router: Router,
    private ClienteService: ClienteService
  ) {

  }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      correo: ['', [Validators.email, Validators.required]],
      contrasena: ['', [Validators.minLength(2), Validators.maxLength(15), Validators.required]],
    }
    );
    this.registerForm = this.formBuilder.group({
      nombre: ['', [Validators.minLength(2), Validators.maxLength(15), Validators.required]],
      apellido: ['', [Validators.minLength(2), Validators.maxLength(15), Validators.required]],
      correo: ['', [Validators.email, Validators.required]],
      telefono: ['', [Validators.required, Validators.pattern("[0-9 ]{9}")]],
      iban: ['', [Validators.minLength(24), Validators.maxLength(24), Validators.required]],
      dni: ['', [Validators.required, Validators.pattern("^[0-9]{8}[A-Za-z]$")]],
      cp: ['', [Validators.required, Validators.pattern("[0-9 ]{5}")]],
      direccio: ['', [Validators.minLength(2), Validators.maxLength(60), Validators.required]],
      contrasena: ['', [Validators.minLength(2), Validators.maxLength(15), Validators.required]],
      confirm_password: [null, Validators.required],
    }, {
      validator: ConfirmedValidator('contrasena', 'confirm_password')
    });

    if(localStorage.getItem('currentUser')){
      this.logged= true;
    }
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
    localStorage.removeItem('role');
    localStorage.removeItem('salario');
    this.router.navigate(['/index']);
  }

  /**
   * Window scroll method
   */
  windowScroll() {
    const navbar = document.getElementById('navbar');
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop > 50) {
      navbar.classList.add('nav-sticky');
    } else {
      navbar.classList.remove('nav-sticky');
    }
  }

  /**
   * Section changed method
   * @param sectionId specify the current sectionID
   */
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  /**
   * Toggle navbar
   */
  toggleMenu() {
    document.getElementById('navbarCollapse').classList.toggle('show');
  }

  /**
   * Login modal
   */
  loginModal(content) {
    this.modalService.open(content, { centered: true });
  }
  /**
 * Login modal
 */
  loginTecnicoModal(content) {
    this.modalService.dismissAll(content)
    this.modalService.open(content, { centered: true });
  }

  login(content) {
    this.ClienteService.login(this.usuario).subscribe(
      datos => {
        try {
          this.datosUsuario = datos;
          if (datos[0]['correo'] == this.usuario.correo) {
            //console.log('Login realizado');
            localStorage.setItem('nombre', this.datosUsuario[0][0]);
            localStorage.setItem('apellido', this.datosUsuario[0][1]);
            localStorage.setItem('id', this.datosUsuario[0][2]);
            localStorage.setItem('correo', this.datosUsuario[0][3]);
            localStorage.setItem('telefono', this.datosUsuario[0][4]);
            localStorage.setItem('iban', this.datosUsuario[0][5]);
            localStorage.setItem('dni', this.datosUsuario[0][6]);
            localStorage.setItem('cp', this.datosUsuario[0][7]);
            localStorage.setItem('direccio', this.datosUsuario[0][8]);
            localStorage.setItem('password', this.datosUsuario[0][9]);
            localStorage.setItem('role', 'ee11cbb19052e40b07aac0ca060c23ee');
            localStorage.setItem('currentUser', JSON.stringify(this.datosUsuario[0]));
            this.modalService.dismissAll(content)
            window.location.reload();

          } else {
            throw new Error('An error occurred');
          }
        }
        catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Login incorrecto',
            text: 'Datos introducidos incorrectos, revisa tus datos',
          })
        }
      });

  }
  loginTecnico(content) {
    this.ClienteService.loginTecnico(this.usuario).subscribe(
      datos => {
        //console.log(datos);
        try {
          this.datosUsuario = datos;
          if (datos[0]['correo'] == this.usuario.correo) {
            //console.log('Login realizado');
            localStorage.setItem('dni', this.datosUsuario[0][0]);
            localStorage.setItem('nombre', this.datosUsuario[0][1]);
            localStorage.setItem('apellido', this.datosUsuario[0][2]);
            localStorage.setItem('correo', this.datosUsuario[0][3]);
            localStorage.setItem('telefono', this.datosUsuario[0][4]);
            localStorage.setItem('direccio', this.datosUsuario[0][5]);
            localStorage.setItem('salario', this.datosUsuario[0][6]);
            localStorage.setItem('id', this.datosUsuario[0][7]);
            localStorage.setItem('iban', this.datosUsuario[0][8]);
            localStorage.setItem('password', this.datosUsuario[0][9]);
            localStorage.setItem('role', '21232f297a57a5a743894a0e4a801fc3');
            localStorage.setItem('currentUser', JSON.stringify(this.datosUsuario[0]));
            this.modalService.dismissAll(content)
            window.location.reload();
          } else {
            throw new Error('An error occurred');
          }
        }
        catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Login incorrecto',
            text: 'Datos introducidos incorrectos, revisa tus datos',
          })
        }
      });
  }




  /**
   * Register modal
   * @param registercontent content
   */
  registerModal(registercontent) {
    this.modalService.open(registercontent, { centered: true });
  }

  register() {
    this.submitted = true;
    //console.log(this.registerForm.value);
    if (this.registerForm.invalid) {
      return;
    } else {
      //console.log("Has sido registrado!!");
      this.ClienteService.register(this.registerForm.value).subscribe(
        datos => {
          //console.log(datos)
        }
      );
    }
  }

  get f() { return this.registerForm.controls; }

}
